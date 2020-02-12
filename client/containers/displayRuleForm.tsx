import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import DisplayRuleForm from '../components/displayRuleForm';
import {
  DisplayRulesAction,
  onChangeSingleRule,
} from '../actions/displayRules';
import { AppState } from '../reducer';

interface StateProps {
  rules: DisplayRules;
}

interface DispatchProps {
  onChange: (index: number, rule: DisplayRule) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  rules: state.displayRules.rules,
});

const mapDispatchToProps = (
  dispatch: Dispatch<DisplayRulesAction>
): DispatchProps => ({
  onChange: (index, rule) => dispatch(onChangeSingleRule(index, rule)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRuleForm);
