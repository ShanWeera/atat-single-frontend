import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {Grid, Card, CardContent, CardActions, Typography, Button} from "@material-ui/core"

import ATAT from "../../../api";
import Variants from "./variants";
import VariantDetails from "./VariantDetails";
import VariantDistribution from "./VariantDistribution";

export default function VariantAnalysis(props) {
    const [variants, setVariants] = useState([])
    const [selectedVariant, setSelectedVariant] = useState({})
    const [context, setContext] = useState(null)
    const jobid = useSelector(state => state.resultId)
    const selected_position = useSelector(state => state.position)


    useEffect(() => {
        let client
        setContext(props.context)

        if (context === 'source') {
            client = ATAT.sourcePosition
        } else {
            client = ATAT.reservoirPosition
        }

        client(jobid, selected_position).then((response) => {
            setVariants(response.data.variants)
        }).catch((error) => {
            console.log(error)
        })
    }, [context, jobid, props.context, selected_position])

    return [
        <Grid container spacing={2} direction={'column'}>
            <Grid item lg={6} sm={12} xs={12}>
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color={"primary"}>
                            SOURCE VARIANTS
                        </Typography>
                        <Typography color={"textSecondary"}>
                            Variants seen in the source sequences at the selected k-mer position.
                        </Typography>

                        <Variants variants={variants} setSelectedVariant={setSelectedVariant} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" fullWidth>What is this?</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color={"primary"}>
                            SOURCE VARIANT DETAILS
                        </Typography>
                        <Typography color={"textSecondary"}>
                            Details of the selected variant.
                        </Typography>

                        <VariantDetails selectedVariant={selectedVariant}/>
                    </CardContent>
                    <CardActions>
                        <Button size="small" fullWidth>What is this?</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color={"primary"}>
                            SOURCE VARIANT COUNTRIES
                        </Typography>
                        <Typography color={"textSecondary"}>
                            Contries from which the selected variant originated from
                        </Typography>

                        <VariantDistribution />
                    </CardContent>
                    <CardActions>
                        <Button size="small" fullWidth>What is this?</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    ]
}