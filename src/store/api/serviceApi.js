// import { apiSlice } from './apiSlice';

// export const serviceApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getServices: builder.query({
//       query: (params = {}) => {
//         const queryParams = new URLSearchParams();
//         if (params.category && params.category !== 'all') {
//           queryParams.append('category', params.category);
//         }
//         if (params.search) {
//           queryParams.append('search', params.search);
//         }
//         if (params.minPrice) {
//           queryParams.append('minPrice', params.minPrice);
//         }
//         if (params.maxPrice) {
//           queryParams.append('maxPrice', params.maxPrice);
//         }
//         if (params.page) {
//           queryParams.append('page', params.page);
//         }
//         if (params.limit) {
//           queryParams.append('limit', params.limit);
//         }
//         return {
//           url: `/services?${queryParams.toString()}`,
//         };
//       },
//       providesTags: (result) =>
//         result?.services
//           ? [
//               ...result.services.map(({ _id }) => ({ type: 'Service', id: _id })),
//               { type: 'Service', id: 'LIST' },
//             ]
//           : [{ type: 'Service', id: 'LIST' }],
//     }),
//     getMyServices: builder.query({
//       query: () => '/services/my-services',
//       providesTags: (result) =>
//         result?.services
//           ? [
//               ...result.services.map(({ _id }) => ({ type: 'Service', id: _id })),
//               { type: 'Service', id: 'MY_LIST' },
//             ]
//           : [{ type: 'Service', id: 'MY_LIST' }],
//     }),
//     getServiceById: builder.query({
//       query: (id) => `/services/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Service', id }],
//     }),
//     createService: builder.mutation({
//       query: (formData) => ({
//         url: '/services',
//         method: 'POST',
//         body: formData, // Handled as FormData for image upload
//       }),
//       invalidatesTags: [
//         { type: 'Service', id: 'LIST' },
//         { type: 'Service', id: 'MY_LIST' },
//         { type: 'Dashboard', id: 'LIST' },
//       ],
//     }),
//     updateService: builder.mutation({
//       query: ({ id, formData }) => ({
//         url: `/services/${id}`,
//         method: 'PUT',
//         body: formData, // Handled as FormData for image upload
//       }),
//       invalidatesTags: (result, error, { id }) => [
//         { type: 'Service', id },
//         { type: 'Service', id: 'LIST' },
//         { type: 'Service', id: 'MY_LIST' },
//       ],
//     }),
//     deleteService: builder.mutation({
//       query: (id) => ({
//         url: `/services/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: (result, error, id) => [
//         { type: 'Service', id },
//         { type: 'Service', id: 'LIST' },
//         { type: 'Service', id: 'MY_LIST' },
//         { type: 'Dashboard', id: 'LIST' },
//       ],
//     }),
//   }),
// });

// export const {
//   useGetServicesQuery,
//   useGetMyServicesQuery,
//   useGetServiceByIdQuery,
//   useCreateServiceMutation,
//   useUpdateServiceMutation,
//   useDeleteServiceMutation,
// } = serviceApi;


// store/api/serviceApi.js
import { baseApi } from './baseApi'

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllServices: builder.query({
      query: ({ search = '', category = '', page = 1 } = {}) => {
        let url = `/services?page=${page}`
        if (search) url += `&search=${search}`
        if (category && category !== 'all') 
          url += `&category=${category}`
        return url
      },
      providesTags: ['Services'],
    }),

    getSingleService: builder.query({
      query: (id) => `/services/${id}`,
      providesTags: ['Services'],
    }),

  }),
})

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
} = serviceApi