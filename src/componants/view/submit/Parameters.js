import {Container, Divider, Grid, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    row: {
        padding: '1%'
    }
}));

export default function ViewSubmitParameters() {
    const classes = useStyles();

    return (
        <Container maxWidth={false}>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root} >
                    <Typography variant={"button"}>K-MER Length</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"9"}
                        fullWidth
                    >
                        <MenuItem value={10}>9</MenuItem>
                        <MenuItem value={20}>10</MenuItem>
                        <MenuItem value={30}>11</MenuItem>
                        <MenuItem value={30}>12</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root}>
                    <Typography variant={"button"}>E-Mail</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <TextField id="standard-basic" fullWidth/>
                </Grid>
            </Grid>
        </Container>
    );
}