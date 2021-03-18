import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Button, Card, CardActions, CardContent, Grid, Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ApiEndpoints from '../../api/Endpoints';
import VariantsDetails from '../variants/Details';
import VariantsDistribution from '../variants/Distribution';

const useStyles = makeStyles((theme) => ({
  header: {
    textTransform: 'uppercase',
  },
}));

export default function MotifsVariant(props) {
  const [variant, setVariant] = useState({});
  const jobid = useSelector((state) => state.jobID);
  const classes = useStyles();

  useEffect(() => {
    let client;
    const { position } = props.selectedSwitch;

    props.context === 'source' ? client = ApiEndpoints.sourcePositionVariants
      : client = ApiEndpoints.reservoirPositionVariants;

    client(jobid, position).then((response) => {
      const selectedVariant = response.data.variants.find((variant) => variant.sequence
                === props.selectedSwitch.sequence);
      setVariant(selectedVariant);
    }).then((error) => {
      console.log(error);
    });
  }, [jobid, props.context, props.selectedSwitch]);
  return [
    <Grid item lg={12} xm={12} xs={12}>
      <Card elevation={2}>
        <CardContent>
          <Typography className={classes.header} variant="h5" component="h2" color="primary">
            {props.context}
            {' '}
            Variant Details
          </Typography>
          <Typography color="textSecondary">
            Variants seen in the
            {props.context}
            {' '}
            sequences at the selected k-mer
            position.
          </Typography>
          <VariantsDetails selectedVariant={variant} />
        </CardContent>
        <CardActions>
          <Button size="small" fullWidth>What is this?</Button>
        </CardActions>
      </Card>
    </Grid>,
    <Grid item lg={12} xm={12} xs={12}>
      <Card elevation={2}>
        <CardContent>
          <Typography className={classes.header} variant="h5" component="h2" color="primary">
            {props.context}
            {' '}
            Variant Distribution
          </Typography>
          <Typography color="textSecondary">
            {props.context === 'source' ? 'Countries' : 'Sources'}
            {' '}
            from which the selected variant originated from.
          </Typography>
          <VariantsDistribution
            name={props.context === 'source' ? 'Countries' : 'Sources'}
            data={variant === undefined ? [] : (props.context === 'source'
              ? variant.country : variant.source)}
          />
        </CardContent>
        <CardActions>
          <Button size="small" fullWidth>What is this?</Button>
        </CardActions>
      </Card>
    </Grid>,
  ];
}
