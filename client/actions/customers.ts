import { Dispatch } from 'redux';
import RulesApi from '../api/rulesApi';

export const ON_CHANGE_CUSTOMER_NAME = 'ON_CHANGE_CUSTOMER_NAME';
export const PROGRESS_GET_CUSTOMERS = 'PROGRESS_GET_CUSTOMERS';
export const SUCCEED_GET_CUSTOMERS = 'SUCCEED_GET_CUSTOMERS';
export const FAILURE_GET_CUSTOMERS = 'FAULURE_GET_CUSTOMERS';
export const PROGRESS_ADD_CUSTOMER = 'PROGRESS_ADD_CUSTOMER';
export const SUCCEED_ADD_CUSTOMER = 'SUCCEED_ADD_CUSTOMER';
export const FAILURE_ADD_CUSTOMER = 'FAULURE_ADD_CUSTOMER';
export const PROGRESS_DELETE_CUSTOMER = 'PROGRESS_DELETE_CUSTOMER';
export const SUCCEED_DELETE_CUSTOMER = 'SUCCEED_DELETE_CUSTOMER';
export const FAILURE_DELETE_CUSTOMER = 'FAULURE_DELETE_CUSTOMER';

export const onChangeCustomerName = (customerName: string) => ({
  type: ON_CHANGE_CUSTOMER_NAME as typeof ON_CHANGE_CUSTOMER_NAME,
  payload: { customerName },
});

export const progressGetCustomers = () => ({
  type: PROGRESS_GET_CUSTOMERS as typeof PROGRESS_GET_CUSTOMERS,
});

export const succeedGetCustomers = (gotCustomerNames: string[]) => ({
  type: SUCCEED_GET_CUSTOMERS as typeof SUCCEED_GET_CUSTOMERS,
  payload: { gotCustomerNames },
});

export const failureGetCustomers = (message: string) => ({
  type: FAILURE_GET_CUSTOMERS as typeof FAILURE_GET_CUSTOMERS,
  payload: { message },
  error: true,
});

export const progressAddCustomer = () => ({
  type: PROGRESS_ADD_CUSTOMER as typeof PROGRESS_ADD_CUSTOMER,
});

export const succeedAddCustomer = (addedCustomerName: string) => ({
  type: SUCCEED_ADD_CUSTOMER as typeof SUCCEED_ADD_CUSTOMER,
  payload: { addedCustomerName },
});

export const failureAddCustomer = (message: string) => ({
  type: FAILURE_ADD_CUSTOMER as typeof FAILURE_ADD_CUSTOMER,
  payload: { message },
  error: true,
});

export const progressDeleteCustomer = () => ({
  type: PROGRESS_DELETE_CUSTOMER as typeof PROGRESS_DELETE_CUSTOMER,
});

export const succeedDeleteCustomer = (deletedCustomerName: string) => ({
  type: SUCCEED_DELETE_CUSTOMER as typeof SUCCEED_DELETE_CUSTOMER,
  payload: { deletedCustomerName },
});

export const failureDeleteCustomer = (message: string) => ({
  type: FAILURE_DELETE_CUSTOMER as typeof FAILURE_DELETE_CUSTOMER,
  payload: { message },
  error: true,
});

export const getCustomers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(progressGetCustomers());
    try {
      const result = await RulesApi.getCustomers();
      dispatch(succeedGetCustomers(result));
    } catch (error) {
      dispatch(failureGetCustomers(error.message));
    }
  };
};

export const addCustomer = (customerName: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressAddCustomer());
    try {
      const addedCustomerName = await RulesApi.addCustomer(customerName);
      dispatch(succeedAddCustomer(addedCustomerName));
    } catch (error) {
      dispatch(failureAddCustomer(error.message));
    }
  };
};

export const deleteCustomer = (customerName: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressDeleteCustomer());
    try {
      const result = await RulesApi.deleteCustomer(customerName);
      dispatch(succeedDeleteCustomer(result));
    } catch (error) {
      dispatch(failureDeleteCustomer(error.message));
    }
  };
};

export type CustomersAction =
  | ReturnType<typeof onChangeCustomerName>
  | ReturnType<typeof progressGetCustomers>
  | ReturnType<typeof succeedGetCustomers>
  | ReturnType<typeof failureGetCustomers>
  | ReturnType<typeof progressAddCustomer>
  | ReturnType<typeof succeedAddCustomer>
  | ReturnType<typeof failureAddCustomer>
  | ReturnType<typeof progressDeleteCustomer>
  | ReturnType<typeof succeedDeleteCustomer>
  | ReturnType<typeof failureDeleteCustomer>;
