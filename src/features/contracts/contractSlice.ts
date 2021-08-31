import { createSlice } from "@reduxjs/toolkit";
import { getContractsAction, putContractAction } from "./contractAsyncActions";
import {
  ContractModel,
  contractNamespace,
  ContractStateType,
} from "./contractTypes";

/*contract state*/
export const initialState: ContractStateType = {
  contract: {} as ContractModel,
  contracts: [] as ContractModel[],
  loading: false,
};

/*contract store*/
export const contractSlice = createSlice({
  // name is your (feature, module, namespace, context). The terminologies here can be interchangeable.
  name: contractNamespace,

  // initialState is the default value
  initialState,

  // mutate using non-asynchronous actions
  reducers: {},

  // mutate using asynchronous actions
  extraReducers: (builder) => {
    /* GET ALL */
    builder.addCase(getContractsAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getContractsAction.fulfilled, (state, action) => {
      state.contracts = action?.payload;
      state.loading = false;
    });

    builder.addCase(getContractsAction.rejected, (state, action: any) => {
      console.log(action?.error);
      state.loading = false;
    });

    /* UPDATE - Optimistic update */
    builder.addCase(putContractAction.pending, (state, action) => {
      state.tempData = [...state.contracts];
      const index = state.contracts.findIndex(
        (h) => h.id === action.meta.arg.contractId
      );
      state.contracts[index] = action.meta.arg;
    });

    builder.addCase(putContractAction.rejected, (state, action: any) => {
      console.log(action?.error);
      state.contracts = state.tempData as ContractModel[];
    });
  },
});

export default contractSlice.reducer;
