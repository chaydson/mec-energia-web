import { LoadingButton } from "@mui/lab";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

type ButtonProps = {
  isLoading: boolean;
};

export const SubmitButton = (props: ButtonProps) => {
  const { isLoading } = props;
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      size="large"
      loading={isLoading}
      startIcon={<TaskAltIcon />}
      loadingPosition="start"
    >
      {isLoading ? "Gravando" : "Gravar"}
    </LoadingButton>
  );
};

SubmitButton.displayName = "SubmitButton";
