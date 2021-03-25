import { makeStyles } from "@material-ui/core/styles";
import {Avatar, List, ListItemAvatar, ListItemText, ListItem, Button, ButtonBase} from "@material-ui/core";
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';

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

    return [
        <List className={classes.root}>
            <ButtonBase focusRipple className={classes.buttonBase}>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <Avatar className={`${classes.avatar} ${classes.avatarUnknown}`}>
                        <HelpOutlineSharpIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={"SOURCE SEQUENCES"} secondary={"Click to upload source sequence in FASTA format."}/>
            </ListItem>
            </ButtonBase>
            <ButtonBase focusRipple className={classes.buttonBase}>
            <ListItem className={classes.listItem}>
                <ListItemAvatar>
                    <Avatar className={`${classes.avatar} ${classes.avatarUnknown}`}>
                        <HelpOutlineSharpIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={"RESERVOIR SEQUENCES"} secondary={"Click to upload reservoir sequence in FASTA format."}/>
            </ListItem>
            </ButtonBase>
            <ListItem className={classes.listItem}>
                <Button color={"primary"} component={'li'} fullWidth>
                    Validate
                </Button>
            </ListItem>
        </List>
    ]
}
