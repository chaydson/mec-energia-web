import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.main" }}
      height="220px"
      minHeight="220px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="body2" color="white">
        © 2022 • Suporte técnico: pessoa@mec.gov.br
      </Typography>

      <Box mt={5} display="flex" justifyContent="center">
        <Box>
          <Image
            src="/icons/lappis.svg"
            alt="LAPPIS"
            height="40px"
            width={`${324 / 2.075}px`}
          />
        </Box>

        <Box ml={4}>
          <Image
            src="/icons/unb-energia.svg"
            alt="UnB Energia"
            height="40px"
            width={`${379 / 2.075}px`}
          />
        </Box>

        <Box ml={4}>
          <Image
            src="/icons/cgee.svg"
            alt="CGEE"
            height="40px"
            width={`${279 / 2.075}px`}
          />
        </Box>

        <Box ml={4}>
          <Image
            src="/icons/mec.svg"
            alt="MEC Energia"
            height="40px"
            width={`${335 / 2.075}px`}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
