import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    logInUser: build.mutation({
        query: (loginData) => ({
            url:'/auth/login',
            method: "POST",
            data: loginData
        }),
        invalidatesTags:[tagTypes.user]
    }),
  }),
  
})

export const { useLogInUserMutation } = authApi