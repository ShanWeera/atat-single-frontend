import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMale, faCompressAlt, faPaw } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ButtonGroup, Button } from "@material-ui/core"

import { withStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme)  => ({
    button: {
        padding: '2px'
    }
}))

function ResultControls() {
    const classes = useStyles()

    return [
        <Router>
            <ButtonGroup size={"medium"} variant={"text"} fullWidth={true}>
                <Button color={"primary"} className={classes.button}>Source</Button>
                <Button color={"secondary"} className={classes.button}>Compare</Button>
                <Button color={"primary"} className={classes.button}>Reservoir</Button>
            </ButtonGroup>
        </Router>
    ]
}

export default ResultControls
