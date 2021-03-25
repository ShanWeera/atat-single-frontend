import {useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {makeStyles} from "@material-ui/core/styles";

import {Avatar, Button, ButtonBase, Container, Grid, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import DoneIcon from '@material-ui/icons/Done';

import ViewSubmitDatasetUploadDialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        flexGrow: 1
    },
    listItem: {
        justifyContent: 'center'
    },
    buttonBase: {
        width: '100%'
    },
    avatar: {
        backgroundColor: '#f8f8f8'
    },
    avatarSuccess: {
        color: '#176105'
    },
    avatarUnknown: {
        color: '#e24708'
    },
    avatarFailed: {
        color: '#de0404'
    }
}));

export default function ViewSubmitDatasetUpload() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [context, setContext] = useState(null);
    const [open, setOpen] = useState(false);
    const sourceFile = useSelector((state) => state.source_file);
    const reservoirFile = useSelector((state) => state.reservoir_file);
    const uploadDatasetValidated = useSelector((state) => state.uploadDatasetValidated)

    const Validate = () => {
        if (!sourceFile || !reservoirFile)  {
            return;
        }

        const regexHeader = />([^\n\r]*)/gm;
        const regexAll = />.*\S.*[^>]*/gm;
        const metadata = /[^|]+\S/gus;

        const sourceSequences = sourceFile.sequences.match(regexAll);
        const reservoirSequences = reservoirFile.sequences.match(regexAll);
        const allSequences = sourceSequences.concat(reservoirSequences);

        const validationResults = allSequences.map((item) => {
            const header = item.match(regexHeader);
            const metadataCount = header[0].match(metadata).length;

            const sequence = item.replace(header[0])
            const sequenceLength = sequence.length

            return {metadata: metadataCount, sequence: sequenceLength}
        });

        const status = validationResults.every((val, i, arr) => val.metadata === arr[0].metadata && val.sequence === arr[0].sequence);

        status ? dispatch({ type: 'UPLOAD_DATASET_VALIDATED', status: true}, []) : dispatch({ type: 'UPLOAD_DATASET_VALIDATED', status: false}, []);
    }

    return [
        <ViewSubmitDatasetUploadDialog context={context} open={open} setOpen={setOpen} />,
        <Container maxWidth={false}>
            <Grid container alignItems={"center"}>
                <Grid item xs={12} sm={12} lg={4}>
                    <ButtonBase focusRipple className={classes.buttonBase} onClick={() => {setOpen(true); setContext('source')}}>
                        <ListItem className={classes.listItem}>
                            <ListItemAvatar>
                                <Avatar className={`${classes.avatar} ${uploadDatasetValidated ? classes.avatarSuccess : classes.avatarFailed}`}>
                                    {uploadDatasetValidated ? <DoneIcon /> : <HelpOutlineSharpIcon />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"SOURCE SEQUENCES"} secondary={!sourceFile ? "Click to upload source sequence in FASTA format." : sourceFile.name}/>
                        </ListItem>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <ButtonBase focusRipple className={classes.buttonBase} onClick={() => {setOpen(true); setContext('reservoir')}}>
                        <ListItem className={classes.listItem}>
                            <ListItemAvatar>
                                <Avatar className={`${classes.avatar} ${uploadDatasetValidated ? classes.avatarSuccess : classes.avatarFailed}`}>
                                    {uploadDatasetValidated ? <DoneIcon /> : <HelpOutlineSharpIcon />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"RESERVOIR SEQUENCES"} secondary={!reservoirFile ? "Click to upload reservoir sequence in FASTA format."  : reservoirFile.name}/>
                        </ListItem>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <ListItem className={classes.listItem}>
                        <Button color={"primary"} component={'li'} fullWidth onClick={Validate}>
                            Validate
                        </Button>
                    </ListItem>
                </Grid>
            </Grid>
        </Container>
    ]
}
