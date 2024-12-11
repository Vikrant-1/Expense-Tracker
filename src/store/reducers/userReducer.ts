import {createSlice} from '@reduxjs/toolkit';
import {loginThunk, setUserThunk, signupThunk} from '../thunk/userThunk';
import {set} from 'lodash';

interface CounterState {
  id: string;
}

const initialState: CounterState = {
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signupThunk.fulfilled, (state, action) => {
        const userData = action.payload ?? {};
        set(state, '', userData);
      })
      .addCase(signupThunk.rejected, (state,action) => {
        
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const userData = action.payload ?? {};
        set(state, '', userData);
      })
      .addCase(setUserThunk.fulfilled, (state, action) => {
        const userData = action.payload ?? {};
        set(state, '', userData);
      })
      ;
  },
});

export default userSlice.reducer;
