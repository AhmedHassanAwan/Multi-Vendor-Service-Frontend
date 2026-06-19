// store/api/dashboardApi.js
import { baseApi } from './baseApi'

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getCustomerDashboard: builder.query({
      query: () => '/dashboard/customer',
      providesTags: ['Dashboard'],
    }),

    getProviderDashboard: builder.query({
      query: () => '/dashboard/provider',
      providesTags: ['Dashboard'],
    }),

    getAdminDashboard: builder.query({
      query: () => '/dashboard/admin',
      providesTags: ['Dashboard'],
    }),

  }),
})

export const {
  useGetCustomerDashboardQuery,
  useGetProviderDashboardQuery,
  useGetAdminDashboardQuery,
} = dashboardApi