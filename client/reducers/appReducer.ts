import { Reducer } from 'redux';
import { AppAction, ON_CLOSE_FEEDBACK } from '../actions/app';
import {
  CustomersAction,
  PROGRESS_GET_CUSTOMERS,
  SUCCEED_GET_CUSTOMERS,
  FAILURE_DELETE_CUSTOMERS,
  PROGRESS_DELETE_CUSTOMERS,
  SUCCEED_DELETE_CUSTOMERS,
  FAILURE_GET_CUSTOMERS,
} from '../actions/customers';
import {
  DisplayRulesAction,
  PROGRESS_GET_RULES,
  SUCCEED_GET_RULES,
  FAILURE_GET_RULES,
} from '../actions/displayRules';

export interface AppState {
  isGetting: boolean;
  isUpdating: boolean;
  // TODO: 分けたほうがいいかも
  feedback: {
    open: boolean;
    isSucceed: boolean;
    message: string;
  };
}

const initialState: AppState = {
  isGetting: false,
  isUpdating: false,
  feedback: {
    open: false,
    isSucceed: true,
    message: '',
  },
};

const appReducer: Reducer<
  AppState,
  AppAction | CustomersAction | DisplayRulesAction
> = (
  state: AppState = initialState,
  action: AppAction | CustomersAction | DisplayRulesAction
): AppState => {
  switch (action.type) {
    case ON_CLOSE_FEEDBACK:
      return {
        ...state,
        feedback: {
          open: false,
          isSucceed: true,
          message: '',
        },
      };
    case PROGRESS_GET_CUSTOMERS:
    case PROGRESS_GET_RULES:
      return {
        ...state,
        isGetting: true,
      };
    case PROGRESS_DELETE_CUSTOMERS:
      return {
        ...state,
        isUpdating: true,
      };
    case SUCCEED_GET_CUSTOMERS:
    case SUCCEED_GET_RULES:
      return {
        ...state,
        isGetting: false,
      };
    case SUCCEED_DELETE_CUSTOMERS:
      return {
        ...state,
        isUpdating: false,
        feedback: {
          open: true,
          isSucceed: true,
          message: '削除しました',
        },
      };
    case FAILURE_GET_CUSTOMERS:
    case FAILURE_GET_RULES:
      return {
        ...state,
        isGetting: false,
        feedback: {
          open: true,
          isSucceed: false,
          message: action.payload.message,
        },
      };
    case FAILURE_DELETE_CUSTOMERS:
      return {
        ...state,
        isUpdating: false,
        feedback: {
          open: true,
          isSucceed: false,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default appReducer;
