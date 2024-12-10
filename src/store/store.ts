import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import { USER } from '../constants/store';


const reducers = combineReducers({
 [USER]:userReducer,
});

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch