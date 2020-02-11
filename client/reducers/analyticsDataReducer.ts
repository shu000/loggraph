import { Reducer } from 'redux';
import { AnalyticsDataAction, ON_READ } from '../actions/analyticsData';
import ParsedData from '../constants/parsedData';
import { parseAnalyticsData } from '../modules/analyticsDataParser';

export interface AnalyticsDataState {
  parsed: ParsedData;
}

const initialState: AnalyticsDataState = {
  parsed: { sessions: [] },
};

const analyticsDataReducer: Reducer<AnalyticsDataState, AnalyticsDataAction> = (
  state: AnalyticsDataState = initialState,
  action: AnalyticsDataAction
): AnalyticsDataState => {
  switch (action.type) {
    case ON_READ:
      return {
        parsed: parseAnalyticsData(action.payload.data),
      };
    default:
      return state;
  }
};

export default analyticsDataReducer;
