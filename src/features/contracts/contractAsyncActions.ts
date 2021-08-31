import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContractActionTypes, ContractModel } from "./contractTypes";
import { EndPoints } from "axios/api-config";
import { getAxios, putAxios } from "axios/generic-api-calls";

export const getContractsAction = createAsyncThunk(
  ContractActionTypes.FETCH_CONTRACTS,
  async () => {
    const { data } = await getAxios<ContractModel>(EndPoints.contracts);

    return data;
  }
);

export const putContractAction = createAsyncThunk(
  ContractActionTypes.UPDATE_CONTRACT,
  async (contract: ContractModel) => {
    await putAxios<void, ContractModel>(
      EndPoints.contracts,
      contract.contractId,
      contract
    );
  }
);
