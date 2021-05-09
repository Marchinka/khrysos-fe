import React, { useImperativeHandle } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface ConfirmationOptions {
    title: string;
    text: string;
    yes: string;
    no: string;
    yesCallback: () => void;
    noCallback?: () => void;
}

interface ConfirmationProps {
    
}

const DEFAULT_CONFIRMATION_OPTIONS : ConfirmationOptions = {
    title: "", text: "", yes: "", no: "", yesCallback: () => {}
}

const ConfirmationDialog = (props: ConfirmationProps, ref: any) => {
  const [open, setOpen] = React.useState(false);
  const [confirmationOptions, setConfirmationOptions] = React.useState(DEFAULT_CONFIRMATION_OPTIONS);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const doYes = () => {
    if(confirmationOptions.yesCallback) confirmationOptions.yesCallback();
    handleClose();
  }

  const doNo = () => {
    if(confirmationOptions.noCallback) confirmationOptions.noCallback();
    handleClose();
  }

  useImperativeHandle(ref, () => ({
    ask: (options: ConfirmationOptions) => {
        handleOpen();
        setConfirmationOptions(options);
    }
  }));

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{confirmationOptions.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirmationOptions.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={doNo} color="primary">
            {confirmationOptions.no}
          </Button>
          <Button onClick={doYes} color="primary" autoFocus>
            {confirmationOptions.yes}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.forwardRef(ConfirmationDialog)
