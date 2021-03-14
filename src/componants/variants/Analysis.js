import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Grid, Card, CardContent, CardActions, Typography, Button } from "@material-ui/core"

import ApiEndpoints from "../../api/Endpoints";
import VariantsOverview from "./Overview";
import VariantDetails from "./Details";
import { makeStyles } from "@material-ui/core/styles";
import VariantsDistribution from "./Distribution";

const useStyles = makeStyles((theme) => ({
    header: {
        textTransform: 'uppercase'
    }
}));

export default function VariantAnalysis(props) {
    const [variants, setVariants] = useState([])
    const [selectedVariant, setSelectedVariant] = useState({})
    const [context, setContext] = useState(null)

    const jobid = useSelector(state => state.jobID)
    const selected_position = useSelector(state => state.position)

    const classes = useStyles();

    useEffect(() => {
        let client
        setContext(props.context)

        if (context === 'source') {
            client = ApiEndpoints.sourcePosition
        } else {
            client = ApiEndpoints.reservoirPosition
        }

        client(jobid, selected_position).then((response) => {
            setVariants(response.data.variants)
        }).catch((error) => {
            console.log(error)
        })
    }, [context, jobid, props.context, selected_position])

    return [
        <Grid item lg={12} xm={12} xs={12}>
            <Card elevation={2}>
                <CardContent>
                    <Typography className={classes.header} variant="h5" component="h2" color={"primary"}>
                        {context} Variants</Typography>
                    <Typography color={"textSecondary"}>Variants seen in the {context} sequences at the selected k-mer
                        position.</Typography>
                    <VariantsOverview variants={variants} setSelectedVariant={setSelectedVariant} />
                </CardContent>
                <CardActions>
                    <Button size="small" fullWidth>What is this?</Button>
                </CardActions>
            </Card>
        </Grid>,
        <Grid item lg={12} xm={12} xs={12}>
            <Card elevation={2}>
                <CardContent>
                    <Typography className={classes.header} variant="h5" component="h2" color={"primary"}>{context} Variant Details</Typography>
                    <Typography color={"textSecondary"}>Details of the selected k-mer variant.</Typography>
                    <VariantDetails selectedVariant={selectedVariant} />
                </CardContent>
                <CardActions>
                    <Button size="small" fullWidth>What is this?</Button>
                </CardActions>
            </Card>
        </Grid>,
        <Grid item lg={12} xm={12} xs={12}>
            <Card elevation={2}>
                <CardContent>
                    <Typography className={classes.header} variant="h5" component="h2" color={"primary"}>{context} Variant Distribution</Typography>
                    <Typography color={"textSecondary"}>Countries from which the selected variant originated from.</Typography>
                    <VariantsDistribution name={context === 'source' ? 'Countries' : 'Sources'}
                                          data={selectedVariant === undefined ? [] : (context === 'source' ?
                                              selectedVariant.country : selectedVariant.source)} />
                </CardContent>
                <CardActions>
                    <Button size="small" fullWidth>What is this?</Button>
                </CardActions>
            </Card>
        </Grid>
    ]
}