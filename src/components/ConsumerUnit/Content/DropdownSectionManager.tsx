import { Box } from "@mui/material";
import { ReactElement } from "react";
import { DropdownSectionProps } from "./DropdownSection";

interface Props {
  children:
    | ReactElement<DropdownSectionProps>
    | ReactElement<DropdownSectionProps>[];
}

/**
 * Esse componente é pra gerenciar o estado de aberto/fechado
 * dos filhos que são DropdownSection
 *
 * Por enquanto faz nada mesmo.
 */
const DropdownSectionManager = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default DropdownSectionManager;
