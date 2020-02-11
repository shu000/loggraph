import { connect } from 'react-redux';

import Graph from '../components/graph';
import ParsedData from '../constants/parsedData';
import { AppState } from '../reducer';

interface StateProps {
  parsed: ParsedData;
}

const mapStateToProps = (state: AppState): StateProps => ({
  parsed: state.analyticsData.parsed,
});

export default connect(mapStateToProps)(Graph);
