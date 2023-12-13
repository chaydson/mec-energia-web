import { useCallback } from "react";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { Button } from "@mui/material";

const ProfileResetPasswordButton = () => {
  const handleClick = useCallback(() => {
    console.log("Password reset button clicked");
  }, []);

  return (
    <Button
      disabled
      variant="outlined"
      color="primary"
      startIcon={<LockRoundedIcon />}
      size="small"
      onClick={handleClick}
    >
      Alterar senha
    </Button>
  );
};

export default ProfileResetPasswordButton;
