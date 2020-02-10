import { connect } from 'react-redux';
import DisplayRuleForm from '../components/displayRuleForm';
import DisplayRules from '../constants/displayRules';
import { AppState } from '../reducer';

interface StateProps {
  rules: DisplayRules;
}

const mapStateToProps = (state: AppState): StateProps => ({
  rules: state.displayRules.rules,
});

export default connect(mapStateToProps)(DisplayRuleForm);
