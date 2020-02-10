import { combineReducers } from 'redux';

import analyticsDataReducer from './reducers/analyticsDataReducer';
import displayRulesReducer from './reducers/displayRulesReducer';

export const rootReducer = combineReducers({
  analyticsData: analyticsDataReducer,
  displayRules: displayRulesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
