import {useState} from "react";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ViewSubmitDatasetAccordion from "./dataset/Accordion";
import {useSelector} from "react-redux";
import ViewSubmitParameters from "./Parameters";
import {Container, Grid} from "@material-ui/core";
import ViewSubmitJob from "./Job";
import ApiEndpoints from "../../../api/Endpoints";
import {useHistory} from "react-router-dom";

const getSteps = () => {
    return ['Select Datasets', 'Parameters', 'Submit']
}

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return (<ViewSubmitDatasetAccordion />);
        case 1:
            return (<ViewSubmitParameters />);
        case 2:
            return (<ViewSubmitJob />);
        default:
            return null;
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    navigation: {
        textAlign: 'center'
    }
}));

export default function ViewSubmitStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const uploadDatasetValidated = useSelector((state) => state.uploadDatasetValidated);
    const userEmail = useSelector((state) => state.userEmail);
    const kmerLength = useSelector((state) => state.kmerLength);
    const sourceFile = useSelector((state) => state.source_file);
    const reservoirFile = useSelector((state) => state.reservoir_file);
    const history = useHistory();
    const steps = getSteps();

    const totalSteps = () => steps.length
    const completedSteps = () => Object.keys(completed).length
    const isLastStep = () => activeStep === totalSteps() - 1
    const allStepCompleted = () => completedSteps() === totalSteps()

    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const allStepsCompleted = () => completedSteps() === totalSteps();

    const handleComplete = () => {
        const newCompleted = completed;
        console.log(completed)
        switch (activeStep) {
            case 0:
                if (uploadDatasetValidated) {
                    newCompleted[0] = true;
                    setCompleted(newCompleted);
                    handleNext();
                }
                return;
            case 1:
                if (userEmail !== null || kmerLength !==  null) {
                    newCompleted[1] = true;
                    setCompleted(newCompleted);
                    handleNext();
                }
                return;
            case 2:
                ApiEndpoints.submit(sourceFile.sequences, reservoirFile.sequences, kmerLength, userEmail).then(
                    response => history.push(`/results/${response.data}`)
                )
                return;
            default:
                return;
        }
    };

    return [
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepButton onClick={handleStep(index)} completed={completed[index]}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={12}>
                        {getStepContent(activeStep)}
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={12} className={classes.navigation}>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Grid>
                </Grid>
        </Container>
    ]
}