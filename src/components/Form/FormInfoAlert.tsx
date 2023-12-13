import { Alert, Box, Grid } from "@mui/material";
type FormErrorsAlertProps = {
  infoText: string;
};
export const FormInfoAlert = (props: FormErrorsAlertProps) => {
  const { infoText } = props;

  return (
    <Grid item xs={12}>
      <Box mt={3} mb={3}>
        <Alert variant="standard" severity="info">
          {infoText}
        </Alert>
      </Box>
    </Grid>
  );
};
