import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from "@material-ui/core";
import PositionDropdownResults from "../../position/DropdownResults";
import TutorialDialog from "../../tutorial/Dialog";
import VariantAnalysis from "../../variants/Analysis";
import React from "react";

export default function ViewResultsCompare() {
    return [
        <Grid container spacing={2}>
            <Grid item lg={4} sm={12} xs={12}>
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="h5" component="h2" color="primary">
                            POSITION
                        </Typography>
                        <Typography color="textSecondary">
                            Choose the k-mer position to view.
                        </Typography>
                        <PositionDropdownResults />
                    </CardContent>
                    <CardActions>
                        <TutorialDialog>
                            <Button size="small" fullWidth>What is this?</Button>
                        </TutorialDialog>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>,
        <Grid container direction="row" spacing={2}>
            <Grid item lg={6}>
                <Grid container direction="column" spacing={1}>
                    <VariantAnalysis context="source" />
                </Grid>
            </Grid>
            <Grid item lg={6}>
                <Grid container direction="column" spacing={1}>
                    <VariantAnalysis context="reservoir" />
                </Grid>
            </Grid>
        </Grid>
    ]
}