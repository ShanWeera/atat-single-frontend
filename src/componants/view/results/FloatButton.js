import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles(theme => (
    {
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            zIndex: 999
        }
    }
))

export default function ViewResultsFloatButton() {
    const classes = useStyles()

    return [
        <Fab color={'primary'} className={classes.fab}>
            <AddIcon />
        </Fab>
    ]
}
