import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { DisplayRulesAction, fetchRules } from '../actions/displayRules';
import DisplayRuleForms from '../components/displayRuleForms';
import { AppState } from '../reducer';

interface StateProps {
  selectingCustomerName: string;
  rulesCount: number;
}

interface DispatchProps {
  fetchRules: (customerName: string) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  rulesCount: state.displayRules.rules.rules.length,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, DisplayRulesAction>
): DispatchProps => ({
  fetchRules: (customerName: string) => dispatch(fetchRules(customerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRuleForms);
