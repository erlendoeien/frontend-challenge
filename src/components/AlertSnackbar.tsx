import { Snackbar, SnackbarProps } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import React, { FC } from "react";

interface AlertSnackBarProps
  extends SnackbarProps,
    Pick<AlertProps, "severity"> {
  message?: string;
  initiallyOpen?: boolean;
}

/**
 * Component for displaying alerts as a snackbar
 */
const AlertSnackbar: FC<AlertSnackBarProps> = ({
  severity,
  message,
  initiallyOpen,
  ...props
}) => {
  const [open, setOpen] = React.useState(initiallyOpen || false);

  const handleClose = (_?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      {...props}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message ||
          "We couldn't quite figure out the issue, but we're working on it!"}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
