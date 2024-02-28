import { combineReducers } from 'redux';
import { baseApi } from './api/baseApi';
import { authSlice } from './slice/authSlice';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,

});

export default rootReducer;
