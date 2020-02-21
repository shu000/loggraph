import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { CustomersAction, deleteCustomer } from '../actions/customers';
import { DisplayRulesAction, updateRules } from '../actions/displayRules';
import { UiAction, closeSideMenu } from '../actions/ui';
import SideMenu from '../components/sideMenu';
import { RootState } from '../reducer';
import DisplayRules, { DisplayRule } from '../constants/displayRules';

interface StateProps {
  selectingCustomerName: string;
  rules: DisplayRules;
  isOpeningSideMenu: boolean;
}

interface DispatchProps {
  deleteCustomer: (customerName: string) => void;
  updateRules: (
    customerName: string,
    newCustomerName: string,
    rules: DisplayRule[]
  ) => void;
  closeSideMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  selectingCustomerName: state.customers.selectingCustomerName,
  rules: state.displayRules.rules,
  isOpeningSideMenu: state.ui.isOpeningSideMenu,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    RootState,
    undefined,
    CustomersAction | DisplayRulesAction | UiAction
  >
): DispatchProps => ({
  deleteCustomer: (customerName: string) =>
    dispatch(deleteCustomer(customerName)),
  updateRules: (customerName, newCustomerName, rules) =>
    dispatch(updateRules(customerName, newCustomerName, rules)),
  closeSideMenu: () => dispatch(closeSideMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
