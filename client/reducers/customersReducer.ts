import { Reducer } from 'redux';
import { DisplayRulesAction, SUCCEED_CUSTOMERS } from '../actions/displayRules';

export interface CustomersState {
  customerNames: string[];
}

const initialState: CustomersState = {
  customerNames: [],
};

const customersReducer: Reducer<CustomersState, DisplayRulesAction> = (
  state: CustomersState = initialState,
  action: DisplayRulesAction
): CustomersState => {
  switch (action.type) {
    case SUCCEED_CUSTOMERS:
      return {
        ...state,
        customerNames: action.payload.result,
      };
    default:
      return state;
  }
};

export default customersReducer;
