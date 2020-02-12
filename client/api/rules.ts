import axios from 'axios';
import { API_ENDPOINT, API_TIMEOUT } from './config';
import DisplayRules from '../constants/displayRules';

const usersConfig = {
  baseURL: API_ENDPOINT,
  timeout: API_TIMEOUT,
};

export const getCustomers = async (): Promise<string[]> => {
  const instance = axios.create(usersConfig);
  const response = await instance.get(`/customers`);
  if (response.status !== 200) {
    throw new Error('データを取得できませんでした');
  }

  console.log('customer');
  console.log(response.data.result);

  return response.data.result;
};

export const getRules = async (customerName: string): Promise<DisplayRules> => {
  if (customerName === '')
    return {
      customerName: '',
      rules: [],
    };

  const instance = axios.create(usersConfig);
  const response = await instance.get(`/rules/${customerName}`);
  if (response.status !== 200) {
    throw new Error('データを取得できませんでした');
  }

  console.log('rules');
  console.log(response.data.result);

  return response.data.result;
};
