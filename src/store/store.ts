import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import expenseReducer from './reducers/expenseReducer';
import groupReducer from './reducers/groupReducer';


import { GROUP, USER ,EXPENSE } from '../constants/store';


const reducers = combineReducers({
  [USER]: userReducer,
  [EXPENSE]: expenseReducer,
  [GROUP]:groupReducer,
});

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch