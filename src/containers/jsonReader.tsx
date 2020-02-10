import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import JsonReader from '../components/jsonReader';
import { AnalyticsDataAction, onRead } from '../actions/analyticsData';
import AnalyticsData from '../constants/analyticsData';
import ParsedData from '../constants/parsedData';
import { AppState } from '../reducer';

interface StateProps {
  parsed: ParsedData;
}

interface DispatchProps {
  onRead: (data: AnalyticsData) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  parsed: state.analyticsData.parsed,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnalyticsDataAction>
): DispatchProps => ({
  onRead: data => dispatch(onRead(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JsonReader);
