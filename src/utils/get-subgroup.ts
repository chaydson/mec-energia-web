import { Subgroup } from "@/types/subgroups";

export const getSubgroup = (
  supplied: number,
  subgroups: Array<Subgroup>
): string => {
  const correspondingSubgroup = subgroups?.find(
    (subgroup: Subgroup) => supplied >= subgroup.min && supplied <= subgroup.max
  );
  if (correspondingSubgroup) return correspondingSubgroup.name;
  const isGreatherMax = supplied >= subgroups[subgroups?.length - 1].min;
  if (isGreatherMax) return subgroups[subgroups?.length - 1].name;
  return "";
};
