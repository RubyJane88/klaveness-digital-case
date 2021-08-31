import { v4 as uuidv4 } from "uuid";
import { store } from "App";

import { ContractStateType } from "../contractTypes";
import { getContractsAction } from "../contractAsyncActions";

describe("ContractsPage dispatch", () => {
  let state: ContractStateType;

  /* Select the store.getState().contract again
   * before running another expect. It's just how it is */
  it("should dispatch getContractsAction", async () => {
    await store.dispatch(getContractsAction());
    state = store.getState().contract;
    expect(state.contracts).toHaveLength(2);
  });
});
