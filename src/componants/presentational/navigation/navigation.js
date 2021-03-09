import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"
import ResultControls from "./result_controls";
import logo from "../../../assets/images/logo.png"
import {useSelector} from "react-redux"

import { AppBar, Grid , Toolbar, Button, Avatar, Typography, Container } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    button: {
        padding: '0px'
    },
    label: {
        marginLeft: theme.spacing(1)
    },
    alignment: {
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            padding: "1%"
        },
        [theme.breakpoints.up('xs')]: {
            align: "center",
            padding: "1%"
        }
    }
}));

function Navigation() {
    const isResults = useSelector(state => state.isResults)
    const classes = useStyles();

    return [
        <>
            <AppBar color={"default"} position={"static"}>
                <Toolbar>
                    <Grid container>
                        <Grid item sm={12} xs={12} lg={4} md={12} align={"left"} className={classes.alignment}>
                            <Button className={classes.button}>
                                <Avatar src={logo} variant={"square"} style={{ height: '30px', width: '40px' }}/>
                                <Typography variant={"button"} className={classes.label}>Perdana University</Typography>
                            </Button>
                        </Grid>
                        <Grid item sm={12} xs={12} lg={4} align={"center"} className={classes.alignment}>
                            {isResults ? <ResultControls /> : null}
                        </Grid>


                        <Grid item m={12} xs={12} lg={4} align={"right"} className={classes.alignment}>
                            <Typography variant={"button"}>Antigenic Transmissibility Analysis Tool</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    ]
}

export default Navigation
