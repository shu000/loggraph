import { Dispatch } from 'redux';
import RulesApi from '../api/rulesApi';

export const ON_CHANGE_CUSTOMER_NAME = 'ON_CHANGE_CUSTOMER_NAME';
export const PROGRESS_GET_CUSTOMERS = 'PROGRESS_CUSTOMERS';
export const SUCCEED_GET_CUSTOMERS = 'SUCCEED_CUSTOMERS';
export const FAILURE_GET_CUSTOMERS = 'FAULURE_CUSTOMERS';

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

export type CustomersAction =
  | ReturnType<typeof onChangeCustomerName>
  | ReturnType<typeof progressGetCustomers>
  | ReturnType<typeof succeedGetCustomers>
  | ReturnType<typeof failureGetCustomers>;
