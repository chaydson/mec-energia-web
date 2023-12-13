import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { setIsConsumerUnitCreateFormOpen } from "@/store/appSlice";

const ConsumerUnitHeaderAction = () => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(setIsConsumerUnitCreateFormOpen(true));
  }, [dispatch]);

  return (
    <Button
      variant="contained"
      startIcon={<AddRoundedIcon />}
      onClick={handleButtonClick}
    >
      Unidade Consumidora
    </Button>
  );
};

export default ConsumerUnitHeaderAction;
