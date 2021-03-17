import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Grid, Container, CardContent, Typography, CardActions, Button, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

import ApiEndpoints from "../../../api/Endpoints";
import MotifsSwitchesTable from "../../motifs/SwitchesTable";
import MotifsVariant from "../../motifs/Variant";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '1.5%'
    }
}));

export default function ViewResultsMotifs(props) {
    const jobid = props.match.params.id
    const [switches, setSwitches] = useState([])
    const [selectedSwitch, setSelectedSwitch] = useState([])
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch({type: 'IS_RESULTS'}, [])
        dispatch({type: 'RESULT_ID', id: jobid}, []);

        ApiEndpoints.allMotifSwitches(jobid).then((response) => {
            setSwitches(response.data.switches)
        }).catch((error) => {
            console.log(error)
        })
    }, [dispatch, jobid])

    return [
        <>
            <Container maxWidth={false} className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item lg={12} sm={12} xs={12}>
                        <Card elevation={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2" color={"primary"}>
                                    MOTIF SWITCHES
                                </Typography>
                                <Typography color={"textSecondary"}>
                                    All motif switches observed in the provided dataset.
                                </Typography>
                                <MotifsSwitchesTable switches={switches} setSelectedSwitch={setSelectedSwitch} />
                            </CardContent>
                            <CardActions>
                                <Button size="small" fullWidth>What is this?</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} spacing={2}>
                    <Grid item lg={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <MotifsVariant context={"source"} selectedSwitch={selectedSwitch} />
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <MotifsVariant context={"reservoir"} selectedSwitch={selectedSwitch} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    ]
}
