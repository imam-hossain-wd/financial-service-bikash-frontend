import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

export const transationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendMoney: build.mutation({
        query: (sendMoneyData) => ({
            url:'/transation/send-money',
            method: "POST",
            data: sendMoneyData
        }),
        invalidatesTags:[tagTypes.user]
    }),
  }),
  
})

export const { useSendMoneyMutation } = transationApi