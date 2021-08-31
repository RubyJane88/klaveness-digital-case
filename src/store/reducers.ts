/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux";

import contractReducer from "features/contracts/contractSlice";

/*Merges the main reducer with the router state and dynamically injected reducers*/
/*place all reducers here separated by commas. For example, heroReducer*/
const injectedReducers = {
  contract: contractReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
