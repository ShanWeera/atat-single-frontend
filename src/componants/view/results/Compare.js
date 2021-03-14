import { Container, Grid, Card, CardContent, Typography, CardActions, Button }  from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

import VariantAnalysis from "../../variants/Analysis";
import PositionDropdown from "../../position/Dropdown";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '1.5%'
    }
}));

export default function ViewResultsCompare() {
    const classes = useStyles();

    return [
        <>
            <Container maxWidth={false} className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item lg={4} sm={12} xs={12}>
                        <Card elevation={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2" color={"primary"}>
                                    POSITION
                                </Typography>
                                <Typography color={"textSecondary"}>
                                    Choose the k-mer position to view.
                                </Typography>
                                <PositionDropdown />
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
                            <VariantAnalysis context={'source'} />
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <VariantAnalysis context={'reservoir'} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    ]
}
