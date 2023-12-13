import { UserRole } from "@/types/person";
import { Chip, Tooltip } from "@mui/material";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import { UserRoleDescriptionMap, UserRoleLabelMap } from "./constants";

interface UserRoleChipProps {
  role: UserRole;
}

const UserRoleChip = ({ role }: UserRoleChipProps) => (
  <Tooltip title={UserRoleDescriptionMap[role]} placement="right" arrow>
    <Chip
      color="primary"
      label={UserRoleLabelMap[role]}
      icon={<GroupsRoundedIcon />}
    />
  </Tooltip>
);

export default UserRoleChip;
