import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    logInUser: builder.mutation({
        query: ( data ) => ({
          url: `/auth/login`,
          method: 'POST',
          body: data,
        }),
        invalidatesTags: [tagTypes.user],
      }),
  }),
})

export const { useLogInUserMutation } = authApi