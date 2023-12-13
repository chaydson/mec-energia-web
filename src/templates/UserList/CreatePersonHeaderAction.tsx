import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { setIsPersonCreateFormOpen } from "@/store/appSlice";
import CreatePersonForm from "@/components/Person/Form/CreatePersonForm";

const CreatePersonHeaderAction = () => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(setIsPersonCreateFormOpen(true));
  }, [dispatch]);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        onClick={handleButtonClick}
      >
        Pessoa
      </Button>

      <CreatePersonForm />
    </>
  );
};

export default CreatePersonHeaderAction;
