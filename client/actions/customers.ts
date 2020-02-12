import { Dispatch } from 'redux';
import { getCustomers } from '../api/rules';

export const ON_CHANGE_CUSTOMER_NAME = 'ON_CHANGE_CUSTOMER_NAME';
export const PROGRESS_CUSTOMERS = 'PROGRESS_CUSTOMERS';
export const SUCCEED_CUSTOMERS = 'SUCCEED_CUSTOMERS';
export const FAILURE_CUSTOMERS = 'FAULURE_CUSTOMERS';

export const onChangeCustomerName = (customerName: string) => ({
  type: ON_CHANGE_CUSTOMER_NAME as typeof ON_CHANGE_CUSTOMER_NAME,
  payload: { customerName },
});

export const progressFetchCustomers = () => ({
  type: PROGRESS_CUSTOMERS as typeof PROGRESS_CUSTOMERS,
});

export const succeedFetchCustomers = (result: string[]) => ({
  type: SUCCEED_CUSTOMERS as typeof SUCCEED_CUSTOMERS,
  payload: { result },
});

export const failureFetchCustomers = (message: string) => ({
  type: FAILURE_CUSTOMERS as typeof FAILURE_CUSTOMERS,
  payload: { message },
  error: true,
});

export const fetchCustomers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(progressFetchCustomers());
    try {
      const result = await getCustomers();
      dispatch(succeedFetchCustomers(result));
    } catch (error) {
      dispatch(failureFetchCustomers(error.message));
    }
  };
};

export type CustomersAction =
  | ReturnType<typeof onChangeCustomerName>
  | ReturnType<typeof progressFetchCustomers>
  | ReturnType<typeof succeedFetchCustomers>
  | ReturnType<typeof failureFetchCustomers>;
