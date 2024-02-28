import { baseApi } from "./api/baseApi";
import { authSlice } from "./slice/authSlice";

export const rootReducer = {
  auth:authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,

};
