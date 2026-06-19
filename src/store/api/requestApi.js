// import { apiSlice } from './apiSlice';

// export const requestApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getRequestsAsCustomer: builder.query({
//       query: () => '/requests/my-requests',
//       providesTags: (result) =>
//         result?.requests
//           ? [
//               ...result.requests.map(({ _id }) => ({ type: 'Request', id: _id })),
//               { type: 'Request', id: 'CUSTOMER_LIST' },
//             ]
//           : [{ type: 'Request', id: 'CUSTOMER_LIST' }],
//     }),
//     getRequestsAsProvider: builder.query({
//       query: () => '/requests/provider-requests',
//       providesTags: (result) =>
//         result?.requests
//           ? [
//               ...result.requests.map(({ _id }) => ({ type: 'Request', id: _id })),
//               { type: 'Request', id: 'PROVIDER_LIST' },
//             ]
//           : [{ type: 'Request', id: 'PROVIDER_LIST' }],
//     }),
//     getRequestById: builder.query({
//       query: (id) => `/requests/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Request', id }],
//     }),
//     createRequest: builder.mutation({
//       query: ({ serviceId, requestData }) => ({
//         url: `/requests/${serviceId}`,
//         method: 'POST',
//         body: requestData,
//       }),
//       invalidatesTags: [
//         { type: 'Request', id: 'CUSTOMER_LIST' },
//         { type: 'Dashboard', id: 'LIST' },
//       ],
//     }),
//     updateRequestStatus: builder.mutation({
//       query: ({ requestId, status }) => ({
//         url: `/requests/${requestId}/status`,
//         method: 'PUT',
//         body: { status },
//       }),
//       invalidatesTags: (result, error, { requestId }) => [
//         { type: 'Request', id: requestId },
//         { type: 'Request', id: 'CUSTOMER_LIST' },
//         { type: 'Request', id: 'PROVIDER_LIST' },
//         { type: 'Project', id: 'LIST' }, // Accepting request automatically creates a Project
//         { type: 'Dashboard', id: 'LIST' },
//       ],
//     }),
//   }),
// });

// export const {
//   useGetRequestsAsCustomerQuery,
//   useGetRequestsAsProviderQuery,
//   useGetRequestByIdQuery,
//   useCreateRequestMutation,
//   useUpdateRequestStatusMutation,
// } = requestApi;


// store/api/requestApi.js
import { baseApi } from './baseApi'

export const requestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createRequest: builder.mutation({
      query: ({ serviceId, ...body }) => ({
        url: `/requests/${serviceId}`,  // ← /api nahi!
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Requests'],
    }),

  }),
  // Customer ki requests
    getMyRequests: builder.query({
      query: () => '/requests/my-requests',
      providesTags: ['Requests'],
    }),
     // Provider ki requests
    getProviderRequests: builder.query({
      query: (status) => 
        status 
          ? `/requests/provider-requests?status=${status}` 
          : '/requests/provider-requests',
      providesTags: ['Requests'],
    }),

    // Accept ya Reject
    updateRequestStatus: builder.mutation({
      query: ({ requestId, status }) => ({
        url: `/requests/${requestId}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Requests', 'Dashboard', 'Projects'],
    }),

  }),


export const { useCreateRequestMutation, useGetMyRequestsQuery, useGetProviderRequestsQuery, useUpdateRequestStatusMutation } = requestApi