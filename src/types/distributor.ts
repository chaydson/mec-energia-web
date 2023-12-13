import { CardProps } from "./app";
import { Tariff } from "./tariffs";

export interface DistributorPropsTariffs {
  id: number;
  name: string;
  cnpj: string;
  university: number;
  isActive: boolean;
  consumerUnits: number;
  tariffs: Array<Tariff>;
}

export interface DistributorConsumerUnits {
  id: number;
  subgroups: Array<ConsumerUnitSubgroup>;
}

export interface CreateDistributorForm {
  name: string;
  cnpj: string;
}

export interface EditDistributorForm {
  isActive: boolean;
  name: string;
  cnpj: string;
}

export interface ConsumerUnitSubgroup {
  subgroup: string;
  consumer_units: Array<ConsumerUnit>;
}
export interface ConsumerUnit {
  name: string;
  id: number;
}
export interface DistributorProps
  extends DistributorPropsTariffs,
    DistributorConsumerUnits {}

export interface CreateDistributorRequestPayload {
  university: number;
  name: string;
  cnpj: string;
  isActive: boolean;
}

export interface CreateDistributorResponsePayload {
  id: number;
  university: number;
  tariffs: Array<Tariff>;
  name: string;
  cnpj: string;
  isActive: boolean;
}

// TODO Remove above

// Only used for payload
export type DistributorResponsePayload = {
  id: number;
  universityId: number;
  name: string;
  cnpj: string;
  isActive: boolean;
  consumerUnitsCount: number;
  pendingTariffsCount: number;
};

export type Distributor = {
  id: number;
  universityId: number;
  name: string;
  cnpj: string;
  isActive: boolean;
  consumerUnitsCount: number;
  pendingTariffsCount: number;
};

export interface DistributorCardProps extends CardProps {
  id: number;
  name: string;
  isActive: boolean;
  pendingTariffsCount: number;
}
export interface EditDistributorRequestPayload {
  university: number;
  name: string;
  cnpj: string;
  isActive: boolean;
  id: number;
}

export interface EditDistributorResponsePayload {
  id: number;
  university: number;
  tariffs: Array<Tariff>;
  name: string;
  cnpj: string;
  isActive: boolean;
}
