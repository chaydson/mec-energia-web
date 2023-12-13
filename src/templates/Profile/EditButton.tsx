import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EditPersonForm from "@/components/Person/Form/EditPersonForm";
import { setActivePersonId, setIsPersonEditFormOpen } from "@/store/appSlice";

interface ProfileEditButtonProps {
  personId: number;
}

const ProfileEditButton = (props: ProfileEditButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setActivePersonId(props.personId))
    dispatch(setIsPersonEditFormOpen(true));
  }, [dispatch, props.personId]);

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<EditRoundedIcon />}
        size="small"
        onClick={handleClick}
      >
        Editar
      </Button>

      <EditPersonForm />
    </>
  );
};

export default ProfileEditButton;
