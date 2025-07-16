import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../services/baseQueryWithAuth";

// building API request with RT Query
export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
