import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  makeStyles,
  Container,
  Grid,
    Typography
} from '@material-ui/core';

import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import ToggleButton  from "@material-ui/lab/ToggleButton"

import GetAppIcon from '@material-ui/icons/GetApp';
import React, {useState} from "react";

const useStyles = makeStyles((theme) => (
  {
    root: (props) => {
      console.log(props.color)
      return {
        color: theme.palette['primary'].main
      };
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 999,
    },
  }
));

function MyToggleButton(props) {
  const { color, ...other } = props;
  console.log(props, 'ssssssssssssssssssssssssssssssssssssssss')
  const classes = useStyles({ color });
  return <ToggleButton classes={classes.root} {...other} />;
}

export default function ViewResultsFloatButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('all');
  const [data, setData] = useState('variants');
  const [format, setFormat] = useState('json');

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open)
  }

  const handleClose = () => {
    setOpen(false);
  }

  return [
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle id={"download"} onClose={handleClose}>
        Download
      </DialogTitle>
      <DialogContent dividers >
      <Container>
        <Grid container maxWidth={false} spacing={3} alignItems="center">
          <Grid item lg={4} sm={4} xs={4} justify={"left"}>
            <Typography>Position</Typography> {/* style added */}
          </Grid>
          <Grid item lg={8} sm={8} xs={8}>
            <ToggleButtonGroup size={"small"} value={position}>
              <ToggleButton value="all" aria-label="bold">
                ALL
              </ToggleButton>
              <ToggleButton value="position" aria-label="italic">
                Position
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid container maxWidth={false} spacing={3} alignItems="center">
          <Grid item lg={4} sm={4} xs={4} justify={"left"}>
            <Typography>Data</Typography> {/* style added */}
          </Grid>
          <Grid item lg={8} sm={8} xs={8}>
            <ToggleButtonGroup size={"small"} value={data}>
              <ToggleButton value="all" aria-label="bold">
                ALL
              </ToggleButton>
              <ToggleButton value="variants" aria-label="italic">
                VARIANTS
              </ToggleButton>
              <ToggleButton value="switches" aria-label="italic">
                MOTIF SWITCHES
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid container maxWidth={false} spacing={3} alignItems="center">
          <Grid item lg={4} sm={4} xs={4} justify={"left"}>
            <Typography>Format</Typography> {/* style added */}
          </Grid>
          <Grid item lg={8} sm={8} xs={8}>
            <ToggleButtonGroup size={"small"} value={format}>
              <MyToggleButton value="json" aria-label="bold" color={"primary"}>
                JSON
              </MyToggleButton>
              <ToggleButton value="csv" aria-label="italic">
                CSV
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Container>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          DOWNLOAD
        </Button>
      </DialogActions>
    </Dialog>,
    <Fab color="primary" className={classes.fab} component={"button"} onClick={handleClickOpen}>
      <GetAppIcon />
    </Fab>,
  ];
}
