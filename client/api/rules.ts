import axios from 'axios';
import { API_ENDPOINT, API_TIMEOUT } from './config';
import DisplayRules from '../constants/displayRules';

const usersConfig = {
  baseURL: API_ENDPOINT,
  timeout: API_TIMEOUT,
};

export const getCustomers = (): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const instance = axios.create(usersConfig);
    instance
      .get(`/customers`)
      .then(response => {
        if (response.status !== 200) {
          reject(new Error('データを取得できませんでした'));
        }
        resolve(response.data.result);
      })
      .catch(error => reject(error));
  });

export const getRules = (customerName: string): Promise<DisplayRules> =>
  new Promise((resolve, reject) => {
    const instance = axios.create(usersConfig);
    instance
      .get(`/rules/${customerName}`)
      .then(response => {
        if (response.status !== 200) {
          reject(new Error('データを取得できませんでした'));
        }
        resolve(response.data.result);
      })
      .catch(error => reject(error));
  });
