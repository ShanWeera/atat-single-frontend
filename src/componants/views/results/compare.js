import PositionDropdown from "../../container/position_dropdown";
import SourceVariants from "../../container/source_variants";
import { Container, Grid, Card, CardContent, Typography, CardActions, Button }  from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '1.5%'
    }
}));

export default function Compare() {
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
                    <Grid item lg={8} sm={12} xs={12}>
                        <Card elevation={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2" color={"primary"}>
                                    MOTIF SWITCHES
                                </Typography>
                                <Typography color={"textSecondary"}>
                                    Choose the KMER position to view
                                </Typography>
                                <PositionDropdown />
                            </CardContent>
                            <CardActions>
                                <Button size="small" fullWidth>What is this?</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Card elevation={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2" color={"primary"}>
                                    SOURCE VARIANTS
                                </Typography>
                                <Typography color={"textSecondary"}>
                                    Variants seen in the source sequences at the selected k-mer position.
                                </Typography>
                                <SourceVariants />
                            </CardContent>
                            <CardActions>
                                <Button size="small" fullWidth>What is this?</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    ]
}
