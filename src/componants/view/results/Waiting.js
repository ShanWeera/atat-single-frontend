import {useEffect, useState} from "react";
import ApiEndpoints from "../../../api/Endpoints";
import {useSelector} from "react-redux";
import { green } from '@material-ui/core/colors';
import {
    Avatar,
    Card,
    CardContent, Chip,
    Container,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText, Typography
} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import {makeStyles} from "@material-ui/core/styles";
import Lottie from 'react-lottie';
import dna from "../../../lotties/dna.json"

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: dna,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const useStyles = makeStyles((theme) => ({
    list: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        "&::-webkit-scrollbar": {
            width: '4px',
            backgroundColor: '#cccccc'
        },
        "&::-webkit-scrollbar:horizontal": {
            height: '4px'
        },
        "&::-webkit-scrollbar-track": {
            border: '1px #ffffff solid',
            borderRadius: '10px',
            "-webkit-box-shadow": "0 0 6px #c8c8c8 inset"
        },
        "&::-webkit-scrollbar-thumb" : {
            backgroundColor: '#929292',
            border: '1px solid #ffffff',
            borderRadius: '25px'
        },
        "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: '#595959',
            border: '1px solid #ffffff'
        },
        "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: '#565656',
            border: '1px solid #ffffff'
        }
    },
    avatar: {
        backgroundColor: 'rgba(255,255,255,0)'
    },
}));

export default function ViewResultsWaiting(props) {
    const classes = useStyles();
    const [logs, setLogs] = useState([])
    const jobid = useSelector((state) => state.jobID);

    useEffect(() => {
        if (jobid === null) {
            return
        }

        const delay = ms => new Promise(res => setTimeout(res, ms))
        let backoff = 3000

        async function checkStatus() {
            while (props.status !== 'FINISHED') {
                await ApiEndpoints.status(jobid).then(
                    response => {
                        const newStatus = response.data

                        if (newStatus === 'FINISHED') {
                            dispatch({ type: 'IS_RESULTS', id: jobid }, []);
                            props.setJobStatus(newStatus)
                        } else if (newStatus === 'RUNNING') {
                            ApiEndpoints.logs(jobid).then((response) =>{
                                let updatedLog = []
                                response.data.logs.forEach((newLog, idx) => {
                                    if (!logs.some(log => log.hash === newLog.hash)) {
                                        updatedLog = [...updatedLog, newLog]
                                    }
                                    setLogs(updatedLog)
                                })
                            })
                        }
                    }
                ).catch(ex => console.log(ex))

                await delay(backoff)
            }
        }

        checkStatus().then(() => console.log(props.status))

    }, [jobid])

    return [
        <Container className={classes.content}>
            <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                <Grid item xs={12} lg={10} sm={12}>
                    <Typography variant={"h5"}>
                        YOUR JOB  IS RUNNING
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                <Grid item xs={12} lg={10} sm={12}>
                    <Chip color={'primary'} label={jobid}/>
                </Grid>
            </Grid>
            <Grid container spacing={16} direction="column" alignItems="center" justify="center"
                  className={classes.container}>
                <List className={classes.list}>
                    {logs.map((log, idx) => {
                        return [<ListItem key={log.hash} autoFocus={true} button>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <CheckIcon style={{ color: green[500] }}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={log.msg} secondary={log.timestamp} />
                        </ListItem>]
                    })}
                </List>
            </Grid>
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item xs={12} lg={10} sm={12}>
                    <Lottie
                        options={lottieOptions}
                        width="100%"
                        isClickToPauseDisabled={true}
                    />
                </Grid>
            </Grid>
        </Container>
    ]
}