import { has } from 'lodash';
import {apiHandler} from '../utils/apiHandler';

export const signupApi = async (data: any) => {
  const response = await apiHandler('/user/signup', 'POST', data);
    return response.user;
};


export const loginApi = async () => {
  const response = await apiHandler('/user/login', 'POST', {});
    return response.user;
};