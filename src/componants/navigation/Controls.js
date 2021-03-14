import { BrowserRouter as Router } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles"
import { ButtonGroup, Button } from "@material-ui/core"

const useStyles = makeStyles((theme)  => ({
    button: {
        padding: '2px'
    }
}))

function NavigationControls() {
    const classes = useStyles()

    return [
        <Router>
            <ButtonGroup size={"medium"} variant={"text"} fullWidth={true}>
                <Button color={"primary"} className={classes.button}>Compare</Button>
                <Button color={"secondary"} className={classes.button}>Motif Switches</Button>
            </ButtonGroup>
        </Router>
    ]
}

export default NavigationControls
