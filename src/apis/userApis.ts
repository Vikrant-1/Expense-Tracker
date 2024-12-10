import { has } from 'lodash';
import {apiHandler} from '../utils/apiHandler';

export const signupApi = async (data: any) => {
  const response = await apiHandler('/user/signup', 'POST', data);
    return response.user;
};
