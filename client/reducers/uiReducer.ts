import { Reducer } from 'redux';
import { UiAction, OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from '../actions/ui';

export interface UiState {
  isOpeningSideMenu: boolean;
}

const initialState: UiState = {
  isOpeningSideMenu: false,
};

const uiReducer: Reducer<UiState, UiAction> = (
  state: UiState = initialState,
  action: UiAction
): UiState => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return {
        ...state,
        isOpeningSideMenu: true,
      };
    case CLOSE_SIDE_MENU:
      return {
        ...state,
        isOpeningSideMenu: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
