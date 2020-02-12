import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  DisplayRulesAction,
  fetchCustomers,
  fetchRules,
} from '../actions/displayRules';
import DisplayRuleForms from '../components/displayRuleForms';
import { AppState } from '../reducer';

interface StateProps {
  rulesCount: number;
}

interface DispatchProps {
  fetchCustomers: () => void;
  fetchRules: (customerName: string) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  rulesCount: state.displayRules.rules.rules.length,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, DisplayRulesAction>
): DispatchProps => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  fetchRules: (customerName: string) => dispatch(fetchRules(customerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRuleForms);
