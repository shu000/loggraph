import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Graph from '../components/graph';
import ParsedData from '../constants/parsedData';
import AnalyticsData from '../constants/analyticsData';
import { AnalyticsDataAction, onRead } from '../actions/analyticsData';
import { AppState } from '../reducer';

interface StateProps {
  parsed: ParsedData;
}

interface DispatchProps {
  onReadJson: (data: AnalyticsData) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  parsed: state.analyticsData.parsed,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnalyticsDataAction>
): DispatchProps => ({
  onReadJson: data => dispatch(onRead(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
