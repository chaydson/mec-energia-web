import { ComponentType } from "react";
import { SvgIconProps } from "@mui/material";
import { UserRole } from "./person";

export type Route = {
  title: string;
  Icon: ComponentType<SvgIconProps>;
  href: string;
  pathnames: string[];
  roles?: UserRole[];
};
