import {useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {makeStyles} from "@material-ui/core/styles";

import {
    Avatar,
    Button,
    ButtonBase,
    Container,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar
} from "@material-ui/core";

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
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertMsg, setAlertMsg] = useState(null)

    const handleAlertClose = (event, reason) => reason !== 'clickaway' ? setAlertOpen(false): null

    const getRandomItemFromArray = (array) => {
        const length = array.length;
        const randomInteger = Math.floor(Math.random()*length)

        return array[randomInteger]
    }

    const checkSequenceLengthEqual = (results) => {
        console.log(results)
        const totalResultsCount = results.length;
        const sample = getRandomItemFromArray(results);

        const validResultsCount = results.filter(result => result.sequence === sample.sequence).length;

        return totalResultsCount === validResultsCount;
    }
    const Validate = () => {
        if (!sourceFile || !reservoirFile)  {
            return;
        }

        const regexHeader = />([^\n\r]*)/gm;
        const regexAll = />.*\S.*[^>]*/gm;
        const metadata = /[^|]+\S/gus;
        const residues = /[GALMFWKQESPVICYHRNDT-]/gm;

        const sourceSequences = sourceFile.sequences.match(regexAll);
        const reservoirSequences = reservoirFile.sequences.match(regexAll);
        const allSequences = sourceSequences.concat(reservoirSequences);

        const validationResults = allSequences.map((item) => {
            const header = item.match(regexHeader);
            const metadataCount = header[0].match(metadata).length;
            const sequence = item.split("\n").slice(1).join("\n")
            const sequenceLength = sequence.match(residues).length

            return {header: header[0], metadata: metadataCount, sequence: sequenceLength}
        });

        if (validationResults.some(result => result.metadata !== 4)) {
            setAlertMsg('The FASTA header is invalid. Valid format is: Accession|Strain|Host|Country')
            setAlertOpen(true)
            return
        }

        if (!checkSequenceLengthEqual(validationResults)) {
            dispatch({ type: 'UPLOAD_DATASET_VALIDATED', status: false}, [])
            setAlertMsg('The number of residues is not equal. Make sure to co-align both datasets.')
            setAlertOpen(true)
            return
        }

        dispatch({ type: 'UPLOAD_DATASET_VALIDATED', status: true}, [])
        dispatch({ type: 'RESIDUE_COUNT', count: validationResults[0].sequence}, [])
        dispatch({ type: 'SEQUENCES_COUNT', count: validationResults.length}, [])
    }

    return [
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={alertOpen}
            autoHideDuration={6000}
            onClose={handleAlertClose}
            message={alertMsg} />,
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
