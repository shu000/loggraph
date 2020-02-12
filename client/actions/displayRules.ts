import { Dispatch } from 'redux';
import { DisplayRule } from '../constants/displayRules';
import { getCustomers } from '../api/rules';

export const ON_CHANGE = 'ON_CHANGE';
export const FETCHING_CUSTOMERS = 'FETCHING_CUSTOMERS';
export const SUCCEED_CUSTOMERS = 'SUCCEED_CUSTOMERS';
export const FAILURE_CUSTOMERS = 'FAULURE_CUSTOMERS';

export const onChange = (index: number, rule: DisplayRule) => ({
  type: ON_CHANGE as typeof ON_CHANGE,
  payload: {
    index,
    rule,
  },
});

export const startFetchCustomers = () => ({
  type: FETCHING_CUSTOMERS as typeof FETCHING_CUSTOMERS,
});

export const succeedFetchCustomers = (result: any) => ({
  type: SUCCEED_CUSTOMERS as typeof SUCCEED_CUSTOMERS,
  payload: { result },
});

export const failureFetchCustomers = (message: string) => ({
  type: FAILURE_CUSTOMERS as typeof FAILURE_CUSTOMERS,
  payload: { message },
  error: true,
});

export const fetchCustomers = () => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchCustomers());
    getCustomers()
      .then(result => {
        dispatch(succeedFetchCustomers(result));
      })
      .catch(error => {
        dispatch(failureFetchCustomers(error.message));
      });
  };
};

export type DisplayRulesAction =
  | ReturnType<typeof onChange>
  | ReturnType<typeof startFetchCustomers>
  | ReturnType<typeof succeedFetchCustomers>
  | ReturnType<typeof failureFetchCustomers>;
