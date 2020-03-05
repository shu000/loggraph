import { Reducer } from 'redux';
import {
  CustomersAction,
  ON_CHANGE_CUSTOMER_NAME,
  ON_EDIT_CUSTOMER_NAME,
  SUCCEED_GET_CUSTOMERS,
  SUCCEED_ADD_CUSTOMER,
  SUCCEED_UPDATE_CUSTOMER,
  SUCCEED_DELETE_CUSTOMER,
} from '../actions/customers';
import {
  DisplayRulesAction,
  SUCCEED_UPDATE_RULES,
} from '../actions/displayRules';

export interface CustomersState {
  selectingCustomerName: string;
  editingCustomerName: string;
  customerNames: string[];
}

const initialState: CustomersState = {
  selectingCustomerName: '',
  editingCustomerName: '',
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
      editingCustomerName: '',
      customerNames: [],
    };

  const deletedIndex = oldState.customerNames.indexOf(deletedCustomerName);
  const nextCustomerName =
    oldState.customerNames[deletedIndex === 0 ? 1 : deletedIndex - 1];

  return {
    ...oldState,
    selectingCustomerName: nextCustomerName,
    editingCustomerName: nextCustomerName,
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
        editingCustomerName: action.payload.customerName,
      };
    case ON_EDIT_CUSTOMER_NAME:
      return {
        ...state,
        editingCustomerName: action.payload.edittedCustomerName,
      };
    case SUCCEED_GET_CUSTOMERS:
      if (action.payload.gotCustomerNames.length === 0) return state;
      return {
        ...state,
        selectingCustomerName: action.payload.gotCustomerNames[0],
        editingCustomerName: action.payload.gotCustomerNames[0],
        customerNames: action.payload.gotCustomerNames,
      };
    case SUCCEED_ADD_CUSTOMER:
      return {
        ...state,
        selectingCustomerName: action.payload.addedCustomerName,
        editingCustomerName: action.payload.addedCustomerName,
        customerNames: [
          ...state.customerNames,
          action.payload.addedCustomerName,
        ],
      };
    case SUCCEED_UPDATE_CUSTOMER:
      return {
        ...state,
        selectingCustomerName: action.payload.newCustomerName,
        editingCustomerName: action.payload.newCustomerName,
        customerNames: state.customerNames.map(name => {
          if (name === action.payload.oldCustomerName)
            return action.payload.newCustomerName;

          return name;
        }),
      };
    case SUCCEED_DELETE_CUSTOMER:
      return newStateOnDeleted(state, action.payload.deletedCustomerName);
    case SUCCEED_UPDATE_RULES:
      return {
        ...state,
        selectingCustomerName: action.payload.updatedRules.customerName,
        editingCustomerName: action.payload.updatedRules.customerName,
      };
    default:
      return state;
  }
};

export default customersReducer;
