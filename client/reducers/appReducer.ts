import { Reducer } from 'redux';
import { AppAction, ON_CLOSE_FEEDBACK } from '../actions/app';
import {
  CustomersAction,
  PROGRESS_GET_CUSTOMERS,
  SUCCEED_GET_CUSTOMERS,
  FAILURE_GET_CUSTOMERS,
  PROGRESS_ADD_CUSTOMER,
  SUCCEED_ADD_CUSTOMER,
  FAILURE_ADD_CUSTOMER,
  FAILURE_DELETE_CUSTOMER,
  PROGRESS_DELETE_CUSTOMER,
  SUCCEED_DELETE_CUSTOMER,
} from '../actions/customers';
import {
  DisplayRulesAction,
  PROGRESS_GET_RULES,
  SUCCEED_GET_RULES,
  FAILURE_GET_RULES,
  PROGRESS_UPDATE_RULES,
  SUCCEED_UPDATE_RULES,
  FAILURE_UPDATE_RULES,
} from '../actions/displayRules';

export interface AppState {
  isGetting: boolean; // 参照系APIを叩き中か否か
  isUpdating: boolean; // 更新系APIを叩き中か否か
  isFeedbackOpen: boolean;
  isSucceed: boolean;
  feedbackMessage: string;
}

const initialState: AppState = {
  isGetting: false,
  isUpdating: false,
  isFeedbackOpen: false,
  isSucceed: true,
  feedbackMessage: '',
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
        isFeedbackOpen: false,
      };
    case PROGRESS_GET_CUSTOMERS:
    case PROGRESS_GET_RULES:
      return {
        ...state,
        isGetting: true,
      };
    case PROGRESS_ADD_CUSTOMER:
    case PROGRESS_DELETE_CUSTOMER:
    case PROGRESS_UPDATE_RULES:
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
    case SUCCEED_ADD_CUSTOMER:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isSucceed: true,
        feedbackMessage: '追加しました', // TODO: aciton.payloadに入れたほうがいいね。。。
      };
    case SUCCEED_DELETE_CUSTOMER:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isSucceed: true,
        feedbackMessage: '削除しました',
      };
    case SUCCEED_UPDATE_RULES:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isSucceed: true,
        feedbackMessage: '保存しました',
      };
    case FAILURE_GET_CUSTOMERS:
    case FAILURE_GET_RULES:
      return {
        ...state,
        isGetting: false,
        isFeedbackOpen: true,
        isSucceed: false,
        feedbackMessage: action.payload.message,
      };
    case FAILURE_ADD_CUSTOMER:
    case FAILURE_DELETE_CUSTOMER:
    case FAILURE_UPDATE_RULES:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isSucceed: false,
        feedbackMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default appReducer;
