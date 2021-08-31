export type ContractStateType = {
  readonly contracts: ContractModel[];
  readonly contract: ContractModel;
  readonly loading: boolean;
  readonly tempData?: any[];
};

export type ApiResponse = Record<string, any>;

export type ContractModel = {
  company: string;
  contractId: string;
  periodEnd: Date;
  periodStart: Date;
  scheduledForRenewal: boolean;
  negotiationRenewalDate: Date;
} & ApiResponse;

export const contractNamespace = "contract";

/* action types */
export const ContractActionTypes = {
  FETCH_CONTRACTS: `${contractNamespace}/FETCH_CONTRACTS`,
  UPDATE_CONTRACT: `${contractNamespace}/UPDATE_CONTRACT`,
};
