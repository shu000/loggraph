import { combineReducers } from 'redux';

import analyticsDataReducer from './reducers/analyticsDataReducer';
import customersReducer from './reducers/customersReducer';
import displayRulesReducer from './reducers/displayRulesReducer';
import uiReducer from './reducers/uiReducer';
import appReducer from './reducers/appReducer';

export const rootReducer = combineReducers({
  analyticsData: analyticsDataReducer,
  customers: customersReducer,
  displayRules: displayRulesReducer,
  ui: uiReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
