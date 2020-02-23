import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import EditableTitle from '../components/editableTitle';
import { CustomersAction, onEditCustomerName } from '../actions/customers';
import { RootState } from '../reducer';

interface StateProps {
  editingCustomerName: string;
}

interface DispatchProps {
  onEditCustomerName: (edittedCustoemrName: string) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  editingCustomerName: state.customers.editingCustomerName,
});

const mapDispatchToProps = (
  dispatch: Dispatch<CustomersAction>
): DispatchProps => ({
  onEditCustomerName: edittedCustomerName =>
    dispatch(onEditCustomerName(edittedCustomerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableTitle);
