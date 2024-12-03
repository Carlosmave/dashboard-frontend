import { IDashboardResponse, IIrisDataItem } from '../../interfaces';
import { dashboardServerApi } from './dashboardServerApi';

export const extendedApiSlice = dashboardServerApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query<IIrisDataItem[], void>({
      query: () =>
        'dashboard',
      transformResponse: (rawResult: IDashboardResponse) => {
        const processedDashboardData = rawResult.iris_data
        return processedDashboardData;
      },
      providesTags: ['Dashboard'],
    }),

  }),
});

export const { useGetDashboardDataQuery } = extendedApiSlice;
