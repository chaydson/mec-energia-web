import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

const DetailedAnalysisHeader = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        height: "64px",
        color: "background.paper",
        bgcolor: "primary.main",
        boxShadow: 4,
        display: "flex",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ width: "75%", margin: "auto" }}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default DetailedAnalysisHeader;
