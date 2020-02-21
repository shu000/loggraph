import { Reducer } from 'redux';
import {
  DisplayRulesAction,
  ON_CHANGE,
  SUCCEED_GET_RULES,
} from '../actions/displayRules';
import DisplayRules, { DisplayRule } from '../constants/displayRules';

export interface DisplayRulesState {
  rules: DisplayRules;
}

const initialState: DisplayRulesState = {
  rules: {
    customerName: '',
    rules: [],
  },
};

const emptyRule: DisplayRule = {
  pattern: '',
  matching: 'match',
  title: '',
  text: '',
  backgroundColor: '',
};

const mergedRules = (
  rules: DisplayRule[],
  index: number,
  newRule: DisplayRule
): DisplayRule[] => {
  const merged = rules.map((rule, i) => {
    if (i === index) return newRule;
    return rule;
  });

  return index === merged.length - 1 ? [...merged, { ...emptyRule }] : merged;
};

const displayRulesReducer: Reducer<DisplayRulesState, DisplayRulesAction> = (
  state: DisplayRulesState = initialState,
  action: DisplayRulesAction
): DisplayRulesState => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        rules: {
          customerName: state.rules.customerName,
          rules: mergedRules(
            state.rules.rules,
            action.payload.index,
            action.payload.rule
          ),
        },
      };
    case SUCCEED_GET_RULES:
      return {
        ...state,
        rules: {
          customerName: state.rules.customerName,
          rules: [...action.payload.gotRules, { ...emptyRule }],
        },
      };
    default:
      return state;
  }
};

export default displayRulesReducer;
