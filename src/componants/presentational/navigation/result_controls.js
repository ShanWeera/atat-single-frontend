import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMale, faCompressAlt, faPaw } from '@fortawesome/free-solid-svg-icons'
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ResultControls() {
    return [
        <Router>
            <ButtonGroup className={"mx-auto"} aria-label={"Result Controls"}>
                <Link to=''>
                    <Button className={"pr-4 pl-4 btn-block m-0"} variant={"light"} aria-label={"Compare"}>
                        <span className={"row d-flex justify-content-center"}><FontAwesomeIcon icon={faCompressAlt} /></span>
                        <span className={"row d-flex justify-content-center"}>Compare</span>
                    </Button>
                </Link>
                <Link to=''>
                <Button className={"pr-4 pl-4 btn-block m-0"} variant={"light"} aria-label={"Source"}>
                    <span className={"row d-flex justify-content-center"}><FontAwesomeIcon icon={faMale} /></span>
                    <span className={"row d-flex justify-content-center"}>Source</span>
                </Button>
                </Link>
                <Link to=''>
                <Button className={"pr-4 pl-4 btn-block m-0"} variant={"light"} aria-label={"Reservoir"}>
                    <span className={"row d-flex justify-content-center"}><FontAwesomeIcon icon={faPaw} /></span>
                    <span className={"row d-flex justify-content-center"}>Reservoir</span>
                </Button>
                </Link>
            </ButtonGroup>
        </Router>
    ]
}

export default ResultControls
