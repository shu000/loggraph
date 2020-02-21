import axios from 'axios';
import { API_ENDPOINT, API_TIMEOUT } from './config';
import DisplayRules, { DisplayRule } from '../constants/displayRules';

const usersConfig = {
  baseURL: API_ENDPOINT,
  timeout: API_TIMEOUT,
};

const RulesApi = {
  getCustomers: async (): Promise<string[]> => {
    const instance = axios.create(usersConfig);
    const response = await instance.get(`/customers`);
    if (response.status !== 200) {
      throw new Error('データを取得できませんでした');
    }

    console.log('GET customers');
    console.log(response.data.result);

    return response.data.result;
  },
  addCustomer: async (customerName: string): Promise<string> => {
    const instance = axios.create(usersConfig);
    const response = await instance.post(`/customers`, {
      customerName,
    });
    if (response.status !== 200) {
      throw new Error('登録に失敗しました');
    }

    if (
      response.data.result.result.ok !== 1 ||
      response.data.result.result.n < 1
    ) {
      throw new Error('登録に失敗しました');
    }

    console.log('POST customers');
    console.log(response);

    return customerName;
  },
  deleteCustomer: async (customerName: string): Promise<string> => {
    const instance = axios.create(usersConfig);
    const response = await instance.delete(`/customers/${customerName}`);

    if (response.status !== 200) {
      throw new Error('削除に失敗しました');
    }
    if (response.data.result.result.ok !== 1) {
      throw new Error('削除に失敗しました');
    }
    if (response.data.result.result.n < 1) {
      throw new Error('削除対象を見つけられませんでした');
    }

    console.log('DELETE customers');
    console.log(response);

    return customerName;
  },
  updateCustomer: async (
    customerName: string,
    newCustomerName: string
  ): Promise<boolean> => {
    const instance = axios.create(usersConfig);
    const response = await instance.put(`/customers/${customerName}`, {
      newCustomerName,
    });
    if (response.status !== 200) {
      throw new Error('変更に失敗しました');
    }

    console.log('PUT customers');
    console.log(response);

    return true;
  },
  getRules: async (customerName: string): Promise<DisplayRules> => {
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

    console.log('GET rules');
    console.log(response.data.result);

    return response.data.result;
  },
  updateRules: async (
    customerName: string,
    rules: DisplayRule[]
  ): Promise<boolean> => {
    const instance = axios.create(usersConfig);
    const response = await instance.put(`/rules/${customerName}`, {
      rules,
    });
    if (response.status !== 200) {
      throw new Error('変更に失敗しました');
    }

    console.log('PUT rules');
    console.log(response);

    return true;
  },
};

export default RulesApi;
