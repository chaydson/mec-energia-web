export type GetSubgroupsResponsePayload = {
  subgroups: Array<Subgroup>;
};

export type Subgroup = {
  name: string;
  min: number;
  max: number;
};
