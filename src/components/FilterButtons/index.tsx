import { ComponentType } from "react";
import { Box, Button, ButtonGroup, SvgIconProps } from "@mui/material";

type FilterButton = {
  active: boolean;
  Icon: ComponentType<SvgIconProps>;
  title: string;
  onClick: () => void;
};

type FilterButtonProps = {
  buttons: FilterButton[];
};

const FilterButtons = ({ buttons }: FilterButtonProps) => {
  return (
    <ButtonGroup>
      {buttons.map(({ active, Icon, title, onClick }) => (
        <Button
          sx={{
            px: 0,
            ...(active && {
              px: 1,
              backgroundColor: "highlighted.main",
            }),
          }}
          key={title}
          onClick={onClick}
        >
          <Icon fontSize="small" color={active ? "inherit" : "action"} />

          {active && <Box ml={0.5}>{title}</Box>}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
