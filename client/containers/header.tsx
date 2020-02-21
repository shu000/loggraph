import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { UiAction, openSideMenu } from '../actions/ui';
import Header from '../components/header';
import { RootState } from '../reducer';

interface StateProps {
  isOpeningSideMenu: boolean;
}

interface DispatchProps {
  openSideMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpeningSideMenu: state.ui.isOpeningSideMenu,
});

const mapDispatchToProps = (dispatch: Dispatch<UiAction>): DispatchProps => ({
  openSideMenu: () => dispatch(openSideMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
