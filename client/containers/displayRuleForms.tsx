import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { DisplayRulesAction, getRules } from '../actions/displayRules';
import DisplayRuleForms from '../components/displayRuleForms';
import { AppState } from '../reducer';

interface StateProps {
  selectingCustomerName: string;
  rulesCount: number;
}

interface DispatchProps {
  getRules: (customerName: string) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  rulesCount: state.displayRules.rules.rules.length,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, DisplayRulesAction>
): DispatchProps => ({
  getRules: (customerName: string) => dispatch(getRules(customerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRuleForms);
