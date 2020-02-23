import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Graph from '../components/graph';
import AnalyticsData from '../constants/analyticsData';
import ParsedData from '../constants/parsedData';
import { AnalyticsDataAction, onRead } from '../actions/analyticsData';
import { RootState } from '../reducer';

interface StateProps {
  parsed: ParsedData;
}

interface DispatchProps {
  onReadJson: (data: AnalyticsData) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  parsed: state.analyticsData.parsed,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnalyticsDataAction>
): DispatchProps => ({
  onReadJson: data => dispatch(onRead(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
