import { Reducer } from 'redux';
import { DisplayRulesAction, ON_CHANGE } from '../actions/displayRules';
import DisplayRules, { DisplayRule } from '../constants/displayRules';

export interface DisplayRulesState {
  rules: DisplayRules;
}

const initialState: DisplayRulesState = {
  rules: {
    customerName: 'サンプルくん',
    rules: [
      {
        pattern: '/',
        matching: 'match',
        title: 'root',
        text: 'R',
        backgroundColor: '#ccc',
      },
      {
        pattern: '/life/',
        matching: 'startsWith',
        title: 'life',
        text: 'L',
        backgroundColor: '#c0c',
      },
      {
        pattern: '',
        matching: 'match',
        title: '',
        text: '',
        backgroundColor: '',
      },
    ],
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

  return index === merged.length - 1 ? [...merged, emptyRule] : merged;
};

const analyticsDataReducer: Reducer<DisplayRulesState, DisplayRulesAction> = (
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
    default:
      return state;
  }
};

export default analyticsDataReducer;
