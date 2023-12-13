import { Link, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children?: ReactNode;
  sx?: SxProps;
}

export const OpenBaseCostInfo = ({ onClick, children, sx }: Props) => (
  <Link
    variant="button"
    onClick={onClick}
    sx={{
      ...sx,
      fontSize: "inherit",
      cursor: "pointer",
      textTransform: "lowercase",
    }}
  >
    {children ? children : "custo-base"}
  </Link>
);
