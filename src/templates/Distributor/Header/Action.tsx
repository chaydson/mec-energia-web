import { Fragment, useCallback } from "react";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch } from "react-redux";
import { setIsDistributorCreateFormOpen } from "@/store/appSlice";

const DistributorHeaderAction = () => {
  const dispatch = useDispatch()
  const handleOnCreateDistributorButtonClick = useCallback(() => {
    dispatch(setIsDistributorCreateFormOpen(true))
  }, [dispatch]);

  return (
    <Fragment>
      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        onClick={handleOnCreateDistributorButtonClick}
      >
        Distribuidora
      </Button>

      {/* Colocar form de adicionar distribuidora aqui */}
    </Fragment>
  );
};

export default DistributorHeaderAction;
