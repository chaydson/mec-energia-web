import { getHeadTitle } from "@/utils/head";
import { Box, CircularProgress } from "@mui/material";
import Head from "next/head";
import { useMemo } from "react";

const LoadingTemplate = () => {
  const headTitle = useMemo(() => getHeadTitle(), []);

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>

      <Box
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default LoadingTemplate;
