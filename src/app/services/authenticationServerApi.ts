import { dashboardServerApi } from './dashboardServerApi';

export const extendedApiSlice = dashboardServerApi.injectEndpoints({
  endpoints: (builder) => ({
    getTokens: builder.mutation({
      query: (data) => ({
        url: `users/login`,
        method: 'POST',
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `users/register`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetTokensMutation, useCreateUserMutation } = extendedApiSlice;
