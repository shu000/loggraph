import { Dispatch } from 'redux';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import RulesApi from '../api/rulesApi';

export const ON_CHANGE = 'ON_CHANGE';
export const PROGRESS_GET_RULES = 'PROGRESS_GET_RULES';
export const SUCCEED_GET_RULES = 'SUCCEED_GET_RULES';
export const FAILURE_GET_RULES = 'FAULURE_GET_RULES';
export const PROGRESS_UPDATE_RULES = 'PROGRESS_UPDATE_RULES';
export const SUCCEED_UPDATE_RULES = 'SUCCEED_UPDATE_RULES';
export const FAILURE_UPDATE_RULES = 'FAULURE_UPDATE_RULES';

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

export const succeedGetRules = (gotRules: DisplayRule[]) => ({
  type: SUCCEED_GET_RULES as typeof SUCCEED_GET_RULES,
  payload: { gotRules },
});

export const failureGetRules = (message: string) => ({
  type: FAILURE_GET_RULES as typeof FAILURE_GET_RULES,
  payload: { message },
  error: true,
});

export const progressUpdateRules = () => ({
  type: PROGRESS_UPDATE_RULES as typeof PROGRESS_UPDATE_RULES,
});

export const succeedUpdateRules = (updatedRules: DisplayRules) => ({
  type: SUCCEED_UPDATE_RULES as typeof SUCCEED_UPDATE_RULES,
  payload: { updatedRules },
});

export const failureUpdateRules = (message: string) => ({
  type: FAILURE_UPDATE_RULES as typeof FAILURE_UPDATE_RULES,
  payload: { message },
  error: true,
});

export const getRules = (customerName: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressGetRules());
    try {
      const gotRules = await RulesApi.getRules(customerName);
      dispatch(succeedGetRules(gotRules));
    } catch (error) {
      dispatch(failureGetRules(error.message));
    }
  };
};

const removeEmptyRules = (rules: DisplayRule[]): DisplayRule[] => {
  return rules.filter(rule => {
    return (
      rule.pattern !== '' ||
      rule.title !== '' ||
      rule.text !== '' ||
      rule.backgroundColor !== ''
    );
  });
};

export const updateRules = (
  customerName: string,
  newCustomerName: string,
  showingRules: DisplayRule[]
) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressUpdateRules());
    try {
      const newRules = removeEmptyRules(showingRules);

      const updatedRules = await RulesApi.updateRules(
        customerName,
        newCustomerName,
        newRules
      );
      dispatch(succeedUpdateRules(updatedRules));
    } catch (error) {
      dispatch(failureUpdateRules(error.message));
    }
  };
};

export type DisplayRulesAction =
  | ReturnType<typeof onChangeSingleRule>
  | ReturnType<typeof progressGetRules>
  | ReturnType<typeof succeedGetRules>
  | ReturnType<typeof failureGetRules>
  | ReturnType<typeof progressUpdateRules>
  | ReturnType<typeof succeedUpdateRules>
  | ReturnType<typeof failureUpdateRules>;
