import { TariffFlag } from "./supplier";

export type GetContractsResponsePayload = {
  url: string;
  id: number;
  consumerUnit: number;
  distributorName: string;
  distributor: number;
  startDate: string;
  endDate: Date;
  tariffFlag: TariffFlag;
  subgroup: string;
  supplyVoltage: number;
  peakContractedDemandInKw: number;
  offPeakContractedDemandInKw: number;
};

export type RenewContractForm = {
  code: string;
  distributor: number | "";
  startDate: Date | null;
  supplyVoltage: number | "";
  tariffFlag: TariffFlag;
  contracted: number | "";
  peakContractedDemandInKw: number | "";
  offPeakContractedDemandInKw: number | "";
};

export interface RenewContractRequestPayload {
  consumerUnit: number;
  code: string;
  distributor: number;
  startDate: string;
  supplyVoltage: number;
  tariffFlag: string;
  peakContractedDemandInKw: number;
  offPeakContractedDemandInKw: number;
}

export interface RenewContractResponsePayload {
  id: number;
  consumerUnit: number;
  distributor: number;
  startDate: string;
  endDate: null;
  tariffFlag: string;
  subgroup: string;
  supplyVoltage: number;
  peakContractedDemandInKw: number;
  offPeakContractedDemandInKw: number;
}
