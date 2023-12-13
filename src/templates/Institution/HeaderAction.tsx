import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { setIsInstitutionCreateFormOpen } from "@/store/appSlice";
import CreateInstitutionForm from "@/components/Institution/Form/CreateInstitutionForm";

const InstitutionHeaderAction = () => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(setIsInstitutionCreateFormOpen(true));
  }, [dispatch]);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        onClick={handleButtonClick}
      >
        Instituição
      </Button>

      <CreateInstitutionForm />
    </>
  );
};

export default InstitutionHeaderAction;
