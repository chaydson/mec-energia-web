import { TariffFlag } from "./tariffs";

export type Contract = {
  id: number;
  consumerUnit: number;
  distributor: number;
  distributorName: string;
  startDate: string;
  endDate: null;
  tariffFlag: TariffFlag;
  subgroup: string;
  supplyVoltage: number;
  peakContractedDemandInKw: number;
  offPeakContractedDemandInKw: number;
};
