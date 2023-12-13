import { Subgroup } from "@/types/subgroups";

export const getSubgroupsText = (subgroups: Array<Subgroup>) => {
  return `- ${subgroups[0].max.toLocaleString("pt-BR")} kV ou inferior
    - De ${subgroups[1].min.toLocaleString(
      "pt-BR"
    )} kV a ${subgroups[1].max.toLocaleString("pt-BR")} kV
    - De ${subgroups[2].min.toLocaleString(
      "pt-BR"
    )} kV a ${subgroups[2].max.toLocaleString("pt-BR")} kV
    - ${subgroups[3].min.toLocaleString("pt-BR")} kV
    - De ${subgroups[4].min.toLocaleString(
      "pt-BR"
    )} kV a ${subgroups[4].max.toLocaleString("pt-BR")} kV
    - ${subgroups[5].min.toLocaleString("pt-BR")} kV ou superior`;
};
