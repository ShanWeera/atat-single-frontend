import React, {cloneElement, useState} from "react";

import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@material-ui/core";

export default function TutorialDialog(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log(open)
    }

    const handleClose = () => {
        setOpen(false);
    }

    return [
        <>
        {React.cloneElement( props.children, {onClick: handleClickOpen} )},
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle id={"test"} onClose={handleClose}>
                This is a test
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    GOT IT
                </Button>
            </DialogActions>
        </Dialog>
        </>
    ]
}