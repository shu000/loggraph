import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import CustomersForm from '../components/customersForm';
import { AppState } from '../reducer';

interface StateProps {
  customerNames: string[];
}

interface DispatchProps {
  onChange: (customerName: string) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  customerNames: state.customers.customerNames,
});

/*
const mapDispatchToProps = (
  dispatch: Dispatch<DisplayRulesAction>
): DispatchProps => ({
  onChange: (customerName) => dispatch(onChange(customerName)),
});
*/

export default connect(mapStateToProps)(CustomersForm);
