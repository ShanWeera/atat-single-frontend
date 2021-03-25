import { useState } from "react";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
    Avatar,
    List,
    ListItemAvatar,
    ListItemText,
    ListItem,
    Button,
    ButtonBase,
    Container,
    Grid
} from "@material-ui/core";
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';

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
    const [context, setContext] = useState(null);
    const [open, setOpen] = useState(false);
    const sourceFile = useSelector((state) => state.source_file);
    const reservoirFile = useSelector((state) => state.reservoir_file);

    return [
        <ViewSubmitDatasetUploadDialog context={context} open={open} setOpen={setOpen} />,
        <Container maxWidth={false}>
            <Grid container alignItems={"center"}>
                <Grid item xs={12} sm={12} lg={4}>
                    <ButtonBase focusRipple className={classes.buttonBase} onClick={() => {setOpen(true); setContext('source')}}>
                        <ListItem className={classes.listItem}>
                            <ListItemAvatar>
                                <Avatar className={`${classes.avatar} ${classes.avatarUnknown}`}>
                                    <HelpOutlineSharpIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"SOURCE SEQUENCES"} secondary={!sourceFile ? "Click to upload source sequence in FASTA format." : sourceFile.path}/>
                        </ListItem>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <ButtonBase focusRipple className={classes.buttonBase} onClick={() => {setOpen(true); setContext('reservoir')}}>
                        <ListItem className={classes.listItem}>
                            <ListItemAvatar>
                                <Avatar className={`${classes.avatar} ${classes.avatarUnknown}`}>
                                    <HelpOutlineSharpIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"RESERVOIR SEQUENCES"} secondary={!reservoirFile ? "Click to upload reservoir sequence in FASTA format."  : reservoirFile.path}/>
                        </ListItem>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <ListItem className={classes.listItem}>
                        <Button color={"primary"} component={'li'} fullWidth>
                            Validate
                        </Button>
                    </ListItem>
                </Grid>
            </Grid>
        </Container>
    ]
}
