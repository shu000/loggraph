import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import CustomersForm from '../components/customersForm';
import {
  CustomersAction,
  onChangeCustomerName,
  getCustomers,
} from '../actions/customers';
import { RootState } from '../reducer';

interface StateProps {
  selectingCustomerName: string;
  customerNames: string[];
}

interface DispatchProps {
  onChangeCustomerName: (customerName: string) => void;
  getCustomers: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  customerNames: state.customers.customerNames,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, CustomersAction>
): DispatchProps => ({
  onChangeCustomerName: customerName =>
    dispatch(onChangeCustomerName(customerName)),
  getCustomers: () => dispatch(getCustomers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersForm);
