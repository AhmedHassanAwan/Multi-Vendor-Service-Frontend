// import { apiSlice } from './api/baseApi';

// export const authApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     register: builder.mutation({
//       query: (userData) => ({
//         url: '/auth/register',
//         method: 'POST',
//         body: userData,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     setupProfile: builder.mutation({
//       query: (profileData) => ({
//         url: '/provider/setup-profile',
//         method: 'PUT',
//         body: profileData,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     getProfile: builder.query({
//       query: () => '/provider/profile',
//       providesTags: ['User'],
//     }),
//     updateProfile: builder.mutation({
//       query: (profileData) => ({
//         url: '/provider/update-profile',
//         method: 'PUT',
//         body: profileData,
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useSetupProfileMutation,
//   useGetProfileQuery,
//   useUpdateProfileMutation,
// } = authApi;


import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Register
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),

    // Login
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

  }),
})

export const {useRegisterMutation, useLoginMutation} = authApi