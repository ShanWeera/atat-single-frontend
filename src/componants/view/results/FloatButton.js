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
  Typography, Backdrop
} from '@material-ui/core';

import fileDownload from 'js-file-download'

import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import ToggleButton  from "@material-ui/lab/ToggleButton"
import CircularProgress from '@material-ui/core/CircularProgress';
import GetAppIcon from '@material-ui/icons/GetApp';
import React, { useState } from "react";
import PositionDropdown from "../../position/DropdownResults";
import PositionDropdownDownload from "../../position/DropdownDownload";
import ApiEndpoints from "../../../api/Endpoints";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => (
  {
    root: (props) => {
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
    position: {
      flexGrow: 1,
      paddingTop: '0px !important',
      paddingBottom: '0px !important'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }
));

function MyToggleButton(props) {
  const { color, ...other } = props;
  const classes = useStyles({ color });
  return <ToggleButton classes={classes.root} {...other} />;
}

export default function ViewResultsFloatButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState('1');
  const [data, setData] = useState('variants');
  const [format, setFormat] = useState('json');
  const [backdropOpen, setBackdropOpen] = useState(false);
  const jobid = useSelector((state) => state.jobID);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handlePosition = (evt, position) => {
    if (position !== null) {
      setPosition(position)
    }
  }

  const handleData = (evt, data) => {
    if (data !== null) {
      setData(data)
    }
  }

  const handleFormat = (evt, format) => {
    if (format !== null) {
      setFormat(format)
    }
  }

  const handleDownload = () => {
    setOpen(false)
    setBackdropOpen(true)

    let client

    if (position === 'all') {
      if (data === 'all') {
        client = ApiEndpoints.index
      } else if (data === 'variants') {
        client = ApiEndpoints.results
      } else if (data === 'switches') {
        client = ApiEndpoints.allMotifSwitches
      }
    }

    client(jobid, {responseType: 'blob'}).then((response) => {
      fileDownload(response.data, `${position}-position-${data}-data.json`)
      setBackdropOpen(false)
    })
  }

  return [
    <Backdrop className={classes.backdrop} open={backdropOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>,
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
            <Grid container alignItems={"center"} spacing={2}>
              <Grid item>
                <ToggleButtonGroup size={"small"} value={position} onChange={handlePosition} exclusive>
                  <ToggleButton value="all" aria-label="bold">
                    ALL
                  </ToggleButton>
                  <ToggleButton value="position" aria-label="italic">
                    Position
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {
                position === 'position' ? <>
                  <Grid item className={classes.position}>
                    <PositionDropdownDownload selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
                  </Grid>
                </> : null
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid container maxWidth={false} spacing={3} alignItems="center">
          <Grid item lg={4} sm={4} xs={4} justify={"left"}>
            <Typography>Data</Typography> {/* style added */}
          </Grid>
          <Grid item lg={8} sm={8} xs={8}>
            <ToggleButtonGroup size={"small"} value={data} onChange={handleData} exclusive>
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
            <ToggleButtonGroup size={"small"} value={format} onChange={handleFormat} exclusive>
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
        <Button autoFocus onClick={handleDownload} color="primary">
          DOWNLOAD
        </Button>
      </DialogActions>
    </Dialog>,
    <Fab color="primary" className={classes.fab} component={"button"} onClick={handleClickOpen}>
      <GetAppIcon />
    </Fab>,
  ];
}
