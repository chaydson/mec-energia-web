import { Alert, Box, Grid } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
type FormErrorsAlertProps = {
  hasErrors: boolean;
};
export const FormErrorsAlert = (props: FormErrorsAlertProps) => {
  const { hasErrors } = props;
  if (!hasErrors) return <></>;

  return (
    <Grid item xs={12}>
      <Box mt={3} mb={3}>
        <Alert icon={<ErrorOutlineIcon fontSize="inherit" />} severity="error">
          Corrija os erros acima antes de gravar
        </Alert>
      </Box>
    </Grid>
  );
};
