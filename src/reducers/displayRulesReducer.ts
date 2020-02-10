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
      // debug
      // eslint-disable-next-line
      const newRules = [...state.rules.rules];
      newRules[action.payload.index] = action.payload.rule;
      return {
        ...state,
        rules: {
          customerName: 'サンプルくん',
          rules: newRules,
        },
      };
    default:
      return state;
  }
};

export default analyticsDataReducer;
