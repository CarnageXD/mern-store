import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setSnackbar } from "../redux/features/snackbarSlice";
import { Alert } from "@mui/material";

export default function CustomizedSnackbar() {
  const dispatch = useAppDispatch();
  const snackbarOpen = useAppSelector((state) => state.snackbar.snackbarOpen);
  const snackbarType = useAppSelector((state) => state.snackbar.snackbarType);
  const snackbarMessage = useAppSelector(
    (state) => state.snackbar.snackbarMessage
  );

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      setSnackbar({
        snackbarOpen: false,
        snackbarType,
        snackbarMessage,
      })
    );
  };

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message=""
      >
        <Alert
          elevation={3}
          variant="filled"
          onClose={handleClose}
          color={snackbarType}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
