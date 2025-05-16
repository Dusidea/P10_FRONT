import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// construction de la requête API avec RT Query
export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
