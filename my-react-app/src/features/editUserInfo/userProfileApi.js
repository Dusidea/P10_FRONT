import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../services/baseQueryWithAuth";

export const userProfileAPI = createApi({
  reducerPath: "userProfileAPI",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
    updateName: builder.mutation({
      query: (userName) => ({
        url: "/user/profile",
        method: "PUT",
        body: { userName },
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateNameMutation } = userProfileAPI;
