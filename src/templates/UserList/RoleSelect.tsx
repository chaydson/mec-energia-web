import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEditUserMutation } from "@/api";
import { User, UserRole } from "@/types/person";
import { UserRoleLabelMap } from "@/components/Person/Role/constants";

interface UserRoleSelectProps {
  id: number;
  type: User["type"];
}

const UserRoleSelect = ({ id, type }: UserRoleSelectProps) => {
  const [editUser, { isLoading }] = useEditUserMutation();

  const handleChange = (event: SelectChangeEvent) => {
    editUser({
      userId: id,
      body: {
        type: event.target.value as User["type"],
      },
    });
  };

  return (
    <FormControl fullWidth>
      <Select
        value={type}
        size="small"
        onChange={handleChange}
        disabled={isLoading}
      >
        <MenuItem value={UserRole.UNIVERSITY_USER}>
          {UserRoleLabelMap[UserRole.UNIVERSITY_USER]}
        </MenuItem>

        <MenuItem value={UserRole.UNIVERSITY_ADMIN}>
          {UserRoleLabelMap[UserRole.UNIVERSITY_ADMIN]}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default UserRoleSelect;
