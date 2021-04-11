import { useDispatch } from 'react-redux';
import React, {useEffect, useState} from 'react';

import {
  Container, Grid, Card, CardContent, Typography, CardActions, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VariantAnalysis from '../../variants/Analysis';
import PositionDropdownResults from '../../position/DropdownResults';
import TutorialDialog from "../../tutorial/Dialog";
import ApiEndpoints from "../../../api/Endpoints";
import ViewResultsCompare from "./Compare";
import ViewResultsWaiting from "./Waiting";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '1.5%',
  },
}));

export default function ViewResultsSentry(props) {
  const dispatch = useDispatch();
  const jobid = props.match.params.id;
  const [jobStatus, setJobStatus] = useState('UNKNOWN')

  useEffect(() => {
    dispatch({ type: 'IS_RESULTS' }, []);
    dispatch({ type: 'RESULT_ID', id: jobid }, []);

    ApiEndpoints.status(jobid).then(response => setJobStatus(response.data)).catch(ex => console.log(ex))
  }, [jobid, dispatch]);

  const classes = useStyles();

  return [
    <>
      <Container maxWidth={false} className={classes.container}>
        {jobStatus === 'FINISHED' ? <ViewResultsCompare /> :<ViewResultsWaiting status={jobStatus} setJobStatus={setJobStatus} />}
      </Container>
      </>
  ];
}
