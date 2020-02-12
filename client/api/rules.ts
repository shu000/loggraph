import axios from 'axios';
import { API_ENDPOINT, API_TIMEOUT } from './config';

const usersConfig = {
  baseURL: API_ENDPOINT,
  timeout: API_TIMEOUT,
};

export const getCustomers = async (): Promise<any> => {
  const instance = axios.create(usersConfig);
  const response = await instance.get(`/customers`);

  if (response.status !== 200) {
    throw new Error('サーバーエラーです');
  }

  return response;
};

export const getRules = async (customerName: string): Promise<any> => {
  const instance = axios.create(usersConfig);
  const response = await instance.get(`/rules/${customerName}`);

  if (response.status !== 200) {
    throw new Error('サーバーエラーです');
  }

  return response;
};
