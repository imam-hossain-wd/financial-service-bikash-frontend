import { baseApi } from "./api/baseApi";
import counterSlice from "./slice/counterSlice";

export const rootReducer = {

  counter:counterSlice,
  [baseApi.reducerPath]: baseApi.reducer,

};
