import { Reducer } from 'redux';
import { DisplayRulesAction, ON_CHANGE } from '../actions/displayRules';
import DisplayRules from '../constants/displayRules';

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
    ],
  },
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
          rules: state.rules.rules.map((rule, index) => {
            if (index === action.payload.index) return action.payload.rule;
            return rule;
          }),
        },
      };
    default:
      return state;
  }
};

export default analyticsDataReducer;
