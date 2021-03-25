import { Grid, makeStyles, Container, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import ViewSubmitStepper from "./Stepper";

const useStyles = makeStyles((theme) => (
    {
        option: {
            padding: "1%"
        },
        container: {
            minHeight: "90vh",
            marginTop: theme.spacing.unit * 2
        },
        card: {
            minWidth: "100%"
        }
    }
));

export default function ViewSubmit() {
    const classes = useStyles();

    return [
        <Container className={classes.content}>
            <Grid container spacing={16} direction="column" alignItems="center" justify="center"
                  className={classes.container}>
                <Card className={classes.card} elevation={2}>
                    <CardContent>
                        <ViewSubmitStepper />
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    ]
}
