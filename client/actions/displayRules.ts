import { Dispatch } from 'redux';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import { getRules } from '../api/rules';

export const ON_CHANGE = 'ON_CHANGE';
export const PROGRESS_RULES = 'PROGRESS_RULES';
export const SUCCEED_RULES = 'SUCCEED_RULES';
export const FAILURE_RULES = 'FAULURE_RULES';

export const onChangeSingleRule = (index: number, rule: DisplayRule) => ({
  type: ON_CHANGE as typeof ON_CHANGE,
  payload: {
    index,
    rule,
  },
});

export const progressFetchRules = () => ({
  type: PROGRESS_RULES as typeof PROGRESS_RULES,
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

export const fetchRules = (customerName: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressFetchRules());
    try {
      const result = await getRules(customerName);
      dispatch(succeedFetchRules(result));
    } catch (error) {
      dispatch(failureFetchRules(error.message));
    }
  };
};

export type DisplayRulesAction =
  | ReturnType<typeof onChangeSingleRule>
  | ReturnType<typeof progressFetchRules>
  | ReturnType<typeof succeedFetchRules>
  | ReturnType<typeof failureFetchRules>;
