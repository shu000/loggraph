import { Reducer } from 'redux';
import {
  CustomersAction,
  ON_CHANGE_CUSTOMER_NAME,
  SUCCEED_GET_CUSTOMERS,
  SUCCEED_ADD_CUSTOMERS,
} from '../actions/customers';

export interface CustomersState {
  selectingCustomerName: string;
  customerNames: string[];
}

const initialState: CustomersState = {
  selectingCustomerName: '',
  customerNames: [],
};

const customersReducer: Reducer<CustomersState, CustomersAction> = (
  state: CustomersState = initialState,
  action: CustomersAction
): CustomersState => {
  switch (action.type) {
    case ON_CHANGE_CUSTOMER_NAME:
      return {
        ...state,
        selectingCustomerName: action.payload.customerName,
      };
    case SUCCEED_GET_CUSTOMERS:
      if (action.payload.result.length === 0) return state;
      return {
        ...state,
        selectingCustomerName: action.payload.result[0],
        customerNames: action.payload.result,
      };
    case SUCCEED_ADD_CUSTOMERS:
      return {
        ...state,
        selectingCustomerName: action.payload.addedCustomerName,
        customerNames: [
          ...state.customerNames,
          action.payload.addedCustomerName,
        ],
      };
    default:
      return state;
  }
};

export default customersReducer;
