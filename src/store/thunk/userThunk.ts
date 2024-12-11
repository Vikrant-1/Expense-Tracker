import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginApi, signupApi} from '../../apis/userApis';

// Define the type for your signup data
interface SignupData {
  name: string;
  email: string;
  avatar: string;
  isVerified: boolean;
}

interface userData {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  isVerified?: boolean;
}

export const setUserThunk = createAsyncThunk(
  'api/user/setuser',
  async (data:userData, thunkAPI) => {
    try {
      return data;
    } catch (error) {}
  },
);

export const signupThunk = createAsyncThunk(
  'api/user/signup',
  async (data: SignupData, thunkAPI) => {
    try {
      const response = await signupApi({data: data});
      return response;
    } catch (error) {}
  },
);

export const loginThunk = createAsyncThunk(
  'api/user/login',
  async (_, thunkAPI) => {
    try {
      const response = await loginApi();
      return response;
    } catch (error) {}
  },
);