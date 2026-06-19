// store/api/providerApi.js
import { baseApi } from './baseApi'

export const providerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Profile Setup
    setupProfile: builder.mutation({
      query: (formData) => ({
        url: '/provider/setup-profile',
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),

    // Profile Picture Upload
    uploadProfilePicture: builder.mutation({
      query: (formData) => ({
        url: '/provider/upload-profile-picture',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),

    // Portfolio Upload
    uploadPortfolio: builder.mutation({
      query: (formData) => ({
        url: '/provider/upload-portfolio',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),

    // Get Profile
    getProfile: builder.query({
      query: () => '/provider/profile',
      providesTags: ['Profile'],
    }),

    // Update Profile
    updateProfile: builder.mutation({
      query: (formData) => ({
        url: '/provider/update-profile',
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),

  }),
})

export const {
  useSetupProfileMutation,
  useUploadProfilePictureMutation,
  useUploadPortfolioMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = providerApi