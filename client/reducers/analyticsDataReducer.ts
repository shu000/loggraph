import { Reducer } from 'redux';
import { AnalyticsDataAction, ON_READ } from '../actions/analyticsData';
import { parse } from '../util/analyticsDataParser';
import ParsedData from '../constants/parsedData';

export interface AnalyticsDataState {
  parsed: ParsedData;
}

const initialState: AnalyticsDataState = {
  parsed: { dates: [] },
};

const analyticsDataReducer: Reducer<AnalyticsDataState, AnalyticsDataAction> = (
  state: AnalyticsDataState = initialState,
  action: AnalyticsDataAction
): AnalyticsDataState => {
  switch (action.type) {
    case ON_READ:
      return {
        ...state,
        parsed: parse(action.payload.data),
      };
    default:
      return state;
  }
};

export default analyticsDataReducer;
