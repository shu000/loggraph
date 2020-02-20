import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { UiAction, closeSideMenu } from '../actions/ui';
import SideMenu from '../components/sideMenu';
import { AppState } from '../reducer';

interface StateProps {
  isOpeningSideMenu: boolean;
}

interface DispatchProps {
  closeSideMenu: () => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isOpeningSideMenu: state.ui.isOpeningSideMenu,
});

const mapDispatchToProps = (dispatch: Dispatch<UiAction>): DispatchProps => ({
  closeSideMenu: () => dispatch(closeSideMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
