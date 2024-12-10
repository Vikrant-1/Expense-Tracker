import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {getAuthToken} from './firebase';

// Base Axios instance
const apiClient = axios.create({
  baseURL: 'https://us-central1-expense-tracker-a7d3a.cloudfunctions.net/expenseApi/v1/api',
  timeout: 10000,
});

export const apiHandler = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  headers?: Record<string, string>,
) => {
  try {
    const token = await getAuthToken();
    console.log(token);
    
    console.log(data);
    const response = await apiClient.request<T>({
      url: endpoint,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        ...headers,
      },
    });
    
    return response.data?.data;
  } catch (error: any) {
    // Handle API errors here if needed
    console.error('API Error:', error);
    console.error('API Error:', error?.message);

    throw error;
  }
};
