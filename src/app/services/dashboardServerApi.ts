import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout } from '../slices/authenticationSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api/`,
  prepareHeaders: (headers, { getState }) => {
    const userAccessToken = (getState() as RootState).authentication
      .userAccessToken;
    if (userAccessToken) {
      // include token in req header
      headers.set('authorization', `${userAccessToken}`);
      return headers;
    }
  },
});
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    api.dispatch(logout());
    api.dispatch(dashboardServerApi.util.resetApiState());
  }
  return result;
};

export const dashboardServerApi = createApi({
  reducerPath: 'dashboardServerApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Dashboard'],
  endpoints: () => ({}),
});

