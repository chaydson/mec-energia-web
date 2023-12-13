import { useCallback } from "react";
import { IconButton } from "@mui/material";
import { LockResetRounded } from "@mui/icons-material";

const UserListPasswordResetButton = () => {
  const handleOnPasswordResetButtonClick = useCallback(() => {
    console.log("handleOnPasswordResetButtonClick");
  }, []);

  return (
    <IconButton disabled onClick={handleOnPasswordResetButtonClick}>
      <LockResetRounded />
    </IconButton>
  );
};

export default UserListPasswordResetButton;
