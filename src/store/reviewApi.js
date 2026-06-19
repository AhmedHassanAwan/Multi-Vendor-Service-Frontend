import { apiSlice } from './apiSlice';

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServiceReviews: builder.query({
      query: (serviceId) => `/reviews/service/${serviceId}`,
      providesTags: (result, error, serviceId) => [
        { type: 'Review', id: `SERVICE_${serviceId}` },
        { type: 'Review', id: 'LIST' },
      ],
    }),
    getProviderReviews: builder.query({
      query: (providerId) => `/reviews/provider/${providerId}`,
      providesTags: (result, error, providerId) => [
        { type: 'Review', id: `PROVIDER_${providerId}` },
        { type: 'Review', id: 'LIST' },
      ],
    }),
    getMyReviews: builder.query({
      query: () => '/reviews/my-reviews',
      providesTags: [{ type: 'Review', id: 'MY_LIST' }],
    }),
    createReview: builder.mutation({
      query: ({ projectId, rating, comment }) => ({
        url: `/reviews/${projectId}`,
        method: 'POST',
        body: { rating, comment },
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: 'Review', id: 'LIST' },
        { type: 'Review', id: 'MY_LIST' },
        { type: 'Service' }, // Reviews recalculate Service averageRating and totalReviews
        { type: 'Project', id: projectId }, // Updates reviewed state on project (if tracked)
        { type: 'Dashboard', id: 'LIST' },
      ],
    }),
    deleteReview: builder.mutation({
      query: (reviewId) => ({
        url: `/reviews/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Review', id: 'LIST' },
        { type: 'Service' }, // Triggers rating recalculation on backend
        { type: 'Dashboard', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useGetServiceReviewsQuery,
  useGetProviderReviewsQuery,
  useGetMyReviewsQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
