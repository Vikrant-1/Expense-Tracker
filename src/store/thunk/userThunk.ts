import {createAsyncThunk} from '@reduxjs/toolkit';
import {signupApi} from '../../apis/userApis';

// Define the type for your signup data
interface SignupData {
  name: string;
  email: string;
  avatar: string;
  isVerified: boolean;
}

export const signupThunk = createAsyncThunk(
  'api/user/signup',
  async (data: SignupData, thunkAPI) => {
    try {
      const response = await signupApi({data: data});
      return response;
    } catch (error) {}
  },
);
