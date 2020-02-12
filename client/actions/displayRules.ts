import { Dispatch } from 'redux';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import { getCustomers, getRules } from '../api/rules';

export const ON_CHANGE = 'ON_CHANGE';
export const FETCHING_CUSTOMERS = 'FETCHING_CUSTOMERS';
export const SUCCEED_CUSTOMERS = 'SUCCEED_CUSTOMERS';
export const FAILURE_CUSTOMERS = 'FAULURE_CUSTOMERS';
export const FETCHING_RULES = 'FETCHING_RULES';
export const SUCCEED_RULES = 'SUCCEED_RULES';
export const FAILURE_RULES = 'FAULURE_RULES';

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

export const succeedFetchCustomers = (result: string[]) => ({
  type: SUCCEED_CUSTOMERS as typeof SUCCEED_CUSTOMERS,
  payload: { result },
});

export const failureFetchCustomers = (message: string) => ({
  type: FAILURE_CUSTOMERS as typeof FAILURE_CUSTOMERS,
  payload: { message },
  error: true,
});

export const startFetchRules = () => ({
  type: FETCHING_RULES as typeof FETCHING_RULES,
});

export const succeedFetchRules = (result: DisplayRules) => ({
  type: SUCCEED_RULES as typeof SUCCEED_RULES,
  payload: { result },
});

export const failureFetchRules = (message: string) => ({
  type: FAILURE_RULES as typeof FAILURE_RULES,
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

export const fetchRules = (customerName: string) => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchRules());
    getRules(customerName)
      .then(result => {
        dispatch(succeedFetchRules(result));
      })
      .catch(error => {
        dispatch(failureFetchRules(error.message));
      });
  };
};

export type DisplayRulesAction =
  | ReturnType<typeof onChange>
  | ReturnType<typeof startFetchCustomers>
  | ReturnType<typeof succeedFetchCustomers>
  | ReturnType<typeof failureFetchCustomers>
  | ReturnType<typeof startFetchRules>
  | ReturnType<typeof succeedFetchRules>
  | ReturnType<typeof failureFetchRules>;
