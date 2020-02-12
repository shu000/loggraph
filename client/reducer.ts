import { combineReducers } from 'redux';

import analyticsDataReducer from './reducers/analyticsDataReducer';
import customersReducer from './reducers/customersReducer';
import displayRulesReducer from './reducers/displayRulesReducer';

export const rootReducer = combineReducers({
  analyticsData: analyticsDataReducer,
  customers: customersReducer,
  displayRules: displayRulesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
