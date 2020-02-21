import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { CustomersAction, addCustomer } from '../actions/customers';
import { UiAction, openSideMenu } from '../actions/ui';
import Header from '../components/header';
import { RootState } from '../reducer';

interface StateProps {
  isOpeningSideMenu: boolean;
}

interface DispatchProps {
  openSideMenu: () => void;
  addCustomer: (customerName: string) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpeningSideMenu: state.ui.isOpeningSideMenu,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, CustomersAction | UiAction>
): DispatchProps => ({
  openSideMenu: () => dispatch(openSideMenu()),
  addCustomer: (customerName: string) => dispatch(addCustomer(customerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
