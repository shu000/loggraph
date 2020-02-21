import { connect } from 'react-redux';
import Activity from '../components/activity';
import { DisplayRule } from '../constants/displayRules';
import { RootState } from '../reducer';

interface StateProps {
  rules: DisplayRule[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  rules: state.displayRules.rules.rules,
});

export default connect(mapStateToProps)(Activity);
