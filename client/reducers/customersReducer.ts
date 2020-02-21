import { Reducer } from 'redux';
import {
  CustomersAction,
  ON_CHANGE_CUSTOMER_NAME,
  SUCCEED_GET_CUSTOMERS,
  SUCCEED_ADD_CUSTOMER,
  SUCCEED_DELETE_CUSTOMER,
} from '../actions/customers';
import {
  DisplayRulesAction,
  SUCCEED_UPDATE_RULES,
} from '../actions/displayRules';

export interface CustomersState {
  selectingCustomerName: string;
  customerNames: string[];
}

const initialState: CustomersState = {
  selectingCustomerName: '',
  customerNames: [],
};

const newStateOnDeleted = (
  oldState: CustomersState,
  deletedCustomerName: string
) => {
  if (oldState.customerNames.length === 1)
    return {
      ...oldState,
      selectingCustomerName: '',
      customerNames: [],
    };

  const deletedIndex = oldState.customerNames.indexOf(deletedCustomerName);
  const nextSelectingCustomerName =
    oldState.customerNames[deletedIndex === 0 ? 1 : deletedIndex - 1];

  return {
    ...oldState,
    selectingCustomerName: nextSelectingCustomerName,
    customerNames: oldState.customerNames.filter(
      name => name !== deletedCustomerName
    ),
  };
};

const customersReducer: Reducer<
  CustomersState,
  CustomersAction | DisplayRulesAction
> = (
  state: CustomersState = initialState,
  action: CustomersAction | DisplayRulesAction
): CustomersState => {
  switch (action.type) {
    case ON_CHANGE_CUSTOMER_NAME:
      return {
        ...state,
        selectingCustomerName: action.payload.customerName,
      };
    case SUCCEED_GET_CUSTOMERS:
      if (action.payload.gotCustomerNames.length === 0) return state;
      return {
        ...state,
        selectingCustomerName: action.payload.gotCustomerNames[0],
        customerNames: action.payload.gotCustomerNames,
      };
    case SUCCEED_ADD_CUSTOMER:
      return {
        ...state,
        selectingCustomerName: action.payload.addedCustomerName,
        customerNames: [
          ...state.customerNames,
          action.payload.addedCustomerName,
        ],
      };
    case SUCCEED_DELETE_CUSTOMER:
      return newStateOnDeleted(state, action.payload.deletedCustomerName);
    case SUCCEED_UPDATE_RULES:
      return {
        ...state,
        selectingCustomerName: action.payload.updatedRules.customerName,
      };
    default:
      return state;
  }
};

export default customersReducer;
