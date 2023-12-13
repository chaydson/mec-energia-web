// TODO Rename to "distributors.ts"
export type TariffFlag = "G" | "B";

export type Distributor = {
  id: number;
  title: string;
  hasPendencies: boolean;
  disabled: boolean;
};

export type DistributorsPayload = Distributor[];
