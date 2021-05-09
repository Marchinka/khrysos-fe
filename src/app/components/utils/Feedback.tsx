import React, { useImperativeHandle } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { Color } from '@material-ui/lab/Alert';

export interface FeedbackOptions {
    severity: Color;
    message: string;
}

interface FeedbackProps {
    
}

const DEFAULT_CONFIRMATION_OPTIONS : FeedbackOptions = {
    severity: "success", message: ""
}

const FeedbackItem = (props: FeedbackProps, ref: any) => {
  const [open, setOpen] = React.useState(false);
  const [feedbackOptions, setFeedbackOptions] = React.useState(DEFAULT_CONFIRMATION_OPTIONS);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useImperativeHandle(ref, () => ({
    feedback: (options: FeedbackOptions) => {
        setFeedbackOptions(options);
        handleOpen();
    }
  }));

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity={feedbackOptions.severity}>
            {feedbackOptions.message}
        </MuiAlert>
    </Snackbar>);
}

export default React.forwardRef(FeedbackItem)
