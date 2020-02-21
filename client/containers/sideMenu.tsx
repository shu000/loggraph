import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { CustomersAction, deleteCustomer } from '../actions/customers';
import { UiAction, closeSideMenu } from '../actions/ui';
import SideMenu from '../components/sideMenu';
import { RootState } from '../reducer';

interface StateProps {
  selectingCustomerName: string;
  isOpeningSideMenu: boolean;
}

interface DispatchProps {
  deleteCustomer: (customerName: string) => void;
  closeSideMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  isOpeningSideMenu: state.ui.isOpeningSideMenu,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, CustomersAction | UiAction>
): DispatchProps => ({
  deleteCustomer: (customerName: string) =>
    dispatch(deleteCustomer(customerName)),

  closeSideMenu: () => dispatch(closeSideMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
