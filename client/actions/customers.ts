import { Dispatch } from 'redux';
import RulesApi from '../api/rulesApi';

export const ON_CHANGE_CUSTOMER_NAME = 'ON_CHANGE_CUSTOMER_NAME';
export const PROGRESS_GET_CUSTOMERS = 'PROGRESS_GET_CUSTOMERS';
export const SUCCEED_GET_CUSTOMERS = 'SUCCEED_GET_CUSTOMERS';
export const FAILURE_GET_CUSTOMERS = 'FAULURE_GET_CUSTOMERS';
export const PROGRESS_ADD_CUSTOMERS = 'PROGRESS_ADD_CUSTOMERS';
export const SUCCEED_ADD_CUSTOMERS = 'SUCCEED_ADD_CUSTOMERS';
export const FAILURE_ADD_CUSTOMERS = 'FAULURE_ADD_CUSTOMERS';
export const PROGRESS_DELETE_CUSTOMERS = 'PROGRESS_DELETE_CUSTOMERS';
export const SUCCEED_DELETE_CUSTOMERS = 'SUCCEED_DELETE_CUSTOMERS';
export const FAILURE_DELETE_CUSTOMERS = 'FAULURE_DELETE_CUSTOMERS';

export const onChangeCustomerName = (customerName: string) => ({
  type: ON_CHANGE_CUSTOMER_NAME as typeof ON_CHANGE_CUSTOMER_NAME,
  payload: { customerName },
});

export const progressGetCustomers = () => ({
  type: PROGRESS_GET_CUSTOMERS as typeof PROGRESS_GET_CUSTOMERS,
});

export const succeedGetCustomers = (result: string[]) => ({
  type: SUCCEED_GET_CUSTOMERS as typeof SUCCEED_GET_CUSTOMERS,
  payload: { result },
});

export const failureGetCustomers = (message: string) => ({
  type: FAILURE_GET_CUSTOMERS as typeof FAILURE_GET_CUSTOMERS,
  payload: { message },
  error: true,
});

export const progressAddCustomers = () => ({
  type: PROGRESS_ADD_CUSTOMERS as typeof PROGRESS_ADD_CUSTOMERS,
});

export const succeedAddCustomers = (addedCustomerName: string) => ({
  type: SUCCEED_ADD_CUSTOMERS as typeof SUCCEED_ADD_CUSTOMERS,
  payload: { addedCustomerName },
});

export const failureAddCustomers = (message: string) => ({
  type: FAILURE_ADD_CUSTOMERS as typeof FAILURE_ADD_CUSTOMERS,
  payload: { message },
  error: true,
});

export const progressDeleteCustomers = () => ({
  type: PROGRESS_DELETE_CUSTOMERS as typeof PROGRESS_DELETE_CUSTOMERS,
});

export const succeedDeleteCustomers = (deletedCustomerName: string) => ({
  type: SUCCEED_DELETE_CUSTOMERS as typeof SUCCEED_DELETE_CUSTOMERS,
  payload: { deletedCustomerName },
});

export const failureDeleteCustomers = (message: string) => ({
  type: FAILURE_DELETE_CUSTOMERS as typeof FAILURE_DELETE_CUSTOMERS,
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
    dispatch(progressAddCustomers());
    try {
      const addedCustomerName = await RulesApi.addCustomer(customerName);
      dispatch(succeedAddCustomers(addedCustomerName));
    } catch (error) {
      dispatch(failureAddCustomers(error.message));
    }
  };
};

export const deleteCustomer = (customerName: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(progressDeleteCustomers());
    try {
      const result = await RulesApi.deleteCustomer(customerName);
      dispatch(succeedDeleteCustomers(result));
    } catch (error) {
      dispatch(failureDeleteCustomers(error.message));
    }
  };
};

export type CustomersAction =
  | ReturnType<typeof onChangeCustomerName>
  | ReturnType<typeof progressGetCustomers>
  | ReturnType<typeof succeedGetCustomers>
  | ReturnType<typeof failureGetCustomers>
  | ReturnType<typeof progressAddCustomers>
  | ReturnType<typeof succeedAddCustomers>
  | ReturnType<typeof failureAddCustomers>
  | ReturnType<typeof progressDeleteCustomers>
  | ReturnType<typeof succeedDeleteCustomers>
  | ReturnType<typeof failureDeleteCustomers>;
