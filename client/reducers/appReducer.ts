import { Reducer } from 'redux';
import { AppAction, ON_CLOSE_FEEDBACK } from '../actions/app';
import {
  CustomersAction,
  PROGRESS_GET_CUSTOMERS,
  SUCCEED_GET_CUSTOMERS,
  FAILURE_GET_CUSTOMERS,
  PROGRESS_ADD_CUSTOMERS,
  SUCCEED_ADD_CUSTOMERS,
  FAILURE_ADD_CUSTOMERS,
  FAILURE_DELETE_CUSTOMERS,
  PROGRESS_DELETE_CUSTOMERS,
  SUCCEED_DELETE_CUSTOMERS,
} from '../actions/customers';
import {
  DisplayRulesAction,
  PROGRESS_GET_RULES,
  SUCCEED_GET_RULES,
  FAILURE_GET_RULES,
} from '../actions/displayRules';

export interface AppState {
  isGetting: boolean; // 参照系APIを叩き中か否か
  isUpdating: boolean; // 更新系APIを叩き中か否か
  isFeedbackOpen: boolean;
  isFeedbackSucceed: boolean;
  feedbackMessage: string;
}

const initialState: AppState = {
  isGetting: false,
  isUpdating: false,
  isFeedbackOpen: false,
  isFeedbackSucceed: true,
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
    case PROGRESS_ADD_CUSTOMERS:
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
    case SUCCEED_ADD_CUSTOMERS:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isFeedbackSucceed: true,
        feedbackMessage: '追加しました', // TODO: aciton.payloadに入れたほうがいいね。。。
      };
    case SUCCEED_DELETE_CUSTOMERS:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isFeedbackSucceed: true,
        feedbackMessage: '削除しました',
      };
    case FAILURE_GET_CUSTOMERS:
    case FAILURE_GET_RULES:
      return {
        ...state,
        isGetting: false,
        isFeedbackOpen: true,
        isFeedbackSucceed: false,
        feedbackMessage: action.payload.message,
      };
    case FAILURE_ADD_CUSTOMERS:
    case FAILURE_DELETE_CUSTOMERS:
      return {
        ...state,
        isUpdating: false,
        isFeedbackOpen: true,
        isFeedbackSucceed: false,
        feedbackMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default appReducer;
