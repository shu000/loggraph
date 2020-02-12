import { Reducer } from 'redux';
import { DisplayRulesAction, SUCCEED_CUSTOMERS } from '../actions/displayRules';

export interface CustomersState {
  customers: string[];
}

const initialState: CustomersState = {
  customers: [],
};

const customersReducer: Reducer<CustomersState, DisplayRulesAction> = (
  state: CustomersState = initialState,
  action: DisplayRulesAction
): CustomersState => {
  switch (action.type) {
    case SUCCEED_CUSTOMERS:
      return {
        ...state,
        customers: action.payload.result,
      };
    default:
      return state;
  }
};

export default customersReducer;
