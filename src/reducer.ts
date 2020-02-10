import { combineReducers } from 'redux';

import analyticsDataReducer from './reducers/analyticsDataReducer';

export const rootReducer = combineReducers({
  analyticsData: analyticsDataReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
