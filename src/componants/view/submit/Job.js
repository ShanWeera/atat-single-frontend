import {Container, Grid, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    row: {
        padding: '1%'
    }
}));


export default function ViewSubmitJob() {
    const userEmail = useSelector((state) => state.userEmail);
    const kmerLength = useSelector((state) => state.kmerLength);
    const residueCount = useSelector((state) => state.residueCount);
    const sequencesCount = useSelector((state) => state.sequencesCount);
    const classes = useStyles();

    return [
        <Container maxWidth={false}>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root}>
                    <Typography variant={"button"}>E-Mail</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Typography variant={"button"}>{userEmail}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root} >
                    <Typography variant={"button"}>K-MER Length</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Typography variant={"button"}>{kmerLength}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root}>
                    <Typography variant={"button"}>Residues Per Sequence</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Typography variant={"button"}>{residueCount}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root}>
                    <Typography variant={"button"}>Total Sequences</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Typography variant={"button"}>{sequencesCount}</Typography>
                </Grid>
            </Grid>
        </Container>
    ]
}