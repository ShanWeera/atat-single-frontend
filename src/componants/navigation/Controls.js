import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button } from '@material-ui/core';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '2px',
  },
}));

function NavigationControls() {
  const history = useHistory();
  const jobid = useSelector((state) => state.jobID);

  const handleClick = (context) => {
    if (context === 'motifs') {
      history.push(`/results/${jobid}/motifs`);
    } else if (context === 'compare') {
      history.push(`/results/${jobid}`);
    } else {
      history.push(`/`);
    }
  };

  const classes = useStyles();

  return [
    <Router>
      <ButtonGroup size="medium" variant="text" fullWidth>
        <Button onClick={() => handleClick('job')} color="primary" className={classes.button}>
          New Job
        </Button>
        <Button onClick={() => handleClick('compare')} color="secondary" className={classes.button}>
          Compare
        </Button>
        <Button onClick={() => handleClick('motifs')} color="secondary" className={classes.button}>
          Motif Switches
        </Button>
      </ButtonGroup>
    </Router>,
  ];
}

export default NavigationControls;
