import { ReactNode } from "react";

import Box from "@mui/material/Box";

import Drawer from "@/components/Drawer";
import Header from "@/components/Header";

interface DefaultTemplateProps {
  children: ReactNode;
  disableGutters?: boolean;
  headerAction?: ReactNode;
}

const DefaultTemplate = ({
  children,
  disableGutters,
  headerAction,
}: DefaultTemplateProps) => {
  return (
    <Box display="flex" minHeight="100vh">
      <Drawer />

      <Box flexGrow={1} minHeight="100%" display="flex" flexDirection="column">
        <Header>{headerAction}</Header>

        <Box component="main" flexGrow={1} p={disableGutters ? 0 : 3}>
          {children}
        </Box>

        {/* TODO Footer vai aqui */}
      </Box>
    </Box>
  );
};

export default DefaultTemplate;
