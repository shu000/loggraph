import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import CustomersForm from '../components/customersForm';
import {
  CustomersAction,
  onChangeCustomerName,
  fetchCustomers,
} from '../actions/customers';
import { AppState } from '../reducer';

interface StateProps {
  selectingCustomerName: string;
  customerNames: string[];
}

interface DispatchProps {
  onChangeCustomerName: (customerName: string) => void;
  fetchCustomers: () => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  customerNames: state.customers.customerNames,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, CustomersAction>
): DispatchProps => ({
  onChangeCustomerName: customerName =>
    dispatch(onChangeCustomerName(customerName)),
  fetchCustomers: () => dispatch(fetchCustomers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersForm);
