import {Container, Divider, Grid, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";

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
    const userEmail = useSelector((state) => state.userEmail);
    const kmerLength = useSelector((state) => state.kmerLength);
    const dispatch = useDispatch();

    const changeKmerHandle = (event) => {
        dispatch({ type: 'KMER_LEN_CHANGED', kmerLength: event.target.value})
    }

    const changeUserEmailHandle = (event) => {
        dispatch({ type: 'USER_EMAIL_CHANGED', userEmail: event.target.value})
    }

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
                        value={kmerLength}
                        onChange={changeKmerHandle}
                        fullWidth
                    >
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.row} alignItems={"center"}>
                <Grid item className={classes.root}>
                    <Typography variant={"button"}>E-Mail</Typography>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <TextField id="standard-basic" fullWidth onChange={changeUserEmailHandle} value={userEmail}/>
                </Grid>
            </Grid>
        </Container>
    );
}