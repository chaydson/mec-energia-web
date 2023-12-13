export interface CreateInstitutionForm {
  acronym: string;
  name: string;
  cnpj: string;
}

export interface EditInstitutionForm {
  acronym: string;
  name: string;
  cnpj: string;
}

export interface CreateInstitutionRequestPayload {
  name: string;
  cnpj: string;
  acronym?: string;
}

export interface GetInstitutionResponsePayload {
  id: number;
  name: string;
  cnpj: string;
  acronym?: string;
  createdOn: Date;
}

export type CreateInstitutionResponsePayload = GetInstitutionResponsePayload;

export interface EditInstitutionRequestPayload {
  name: string;
  cnpj: string;
  acronym?: string;
  id: number;
}

export type EditInstitutionResponsePayload = GetInstitutionResponsePayload;

export type Institution = {
  id: number;
  name: string;
  cnpj: string;

  acronym?: string;
  createdOn?: string;
};
