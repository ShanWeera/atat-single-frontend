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
    } else {
      history.push(`/results/${jobid}`);
    }
  };

  const classes = useStyles();

  return [
    <Router>
      <ButtonGroup size="medium" variant="text" fullWidth>
        <Button onClick={() => handleClick('compare')} color="primary" className={classes.button}>
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
