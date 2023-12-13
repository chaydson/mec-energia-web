import {
  selectSuccessNotification,
  setIsSuccessNotificationOpen,
} from "@/store/appSlice";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const SuccessNotification = () => {
  const dispatch = useDispatch();
  const notificationProps = useSelector(selectSuccessNotification);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      setIsSuccessNotificationOpen({
        isOpen: false,
      })
    );
  };
  return (
    <Snackbar
      open={notificationProps.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {notificationProps.text}
      </Alert>
    </Snackbar>
  );
};
export default SuccessNotification;
