import { combineReducers } from 'redux';

import analyticsDataReducer from './reducers/analyticsDataReducer';
import customersReducer from './reducers/customersReducer';
import displayRulesReducer from './reducers/displayRulesReducer';
import uiReducer from './reducers/uiReducer';

export const rootReducer = combineReducers({
  analyticsData: analyticsDataReducer,
  customers: customersReducer,
  displayRules: displayRulesReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
