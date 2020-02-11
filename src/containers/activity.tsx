import { connect } from 'react-redux';
import Activity from '../components/activity';
import { DisplayRule } from '../constants/displayRules';
import { AppState } from '../reducer';

interface StateProps {
  rules: DisplayRule[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  rules: state.displayRules.rules.rules,
});

export default connect(mapStateToProps)(Activity);
