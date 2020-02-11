import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import JsonReader from '../components/jsonReader';
import { AnalyticsDataAction, onRead } from '../actions/analyticsData';
import AnalyticsData from '../constants/analyticsData';

interface DispatchProps {
  onRead: (data: AnalyticsData) => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnalyticsDataAction>
): DispatchProps => ({
  onRead: data => dispatch(onRead(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JsonReader);
