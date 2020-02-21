import { Dispatch } from 'redux';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import RulesApi from '../api/rulesApi';

export const ON_CHANGE = 'ON_CHANGE';
export const PROGRESS_GET_RULES = 'PROGRESS_RULES';
export const SUCCEED_GET_RULES = 'SUCCEED_RULES';
export const FAILURE_GET_RULES = 'FAULURE_RULES';

export const onChangeSingleRule = (index: number, rule: DisplayRule) => ({
  type: ON_CHANGE as typeof ON_CHANGE,
  payload: {
    index,
    rule,
  },
});

export const progressGetRules = () => ({
  type: PROGRESS_GET_RULES as typeof PROGRESS_GET_RULES,
});

export const succeedGetRules = (result: DisplayRules) => ({
  type: SUCCEED_GET_RULES as typeof SUCCEED_GET_RULES,
  payload: { result },
});

export const failureGetRules = (message: string) => ({
  type: FAILURE_GET_RULES as typeof FAILURE_GET_RULES,
  payload: { message },
  error: true,
});

export const getRules = (customerName: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressGetRules());
    try {
      const result = await RulesApi.getRules(customerName);
      dispatch(succeedGetRules(result));
    } catch (error) {
      dispatch(failureGetRules(error.message));
    }
  };
};

export type DisplayRulesAction =
  | ReturnType<typeof onChangeSingleRule>
  | ReturnType<typeof progressGetRules>
  | ReturnType<typeof succeedGetRules>
  | ReturnType<typeof failureGetRules>;
