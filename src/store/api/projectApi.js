// store/api/projectApi.js
import { baseApi } from './baseApi'

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // Customer ke projects
    getMyProjects: builder.query({
      query: () => '/projects/my-projects',
      providesTags: ['Projects'],
    }),

    // Provider ke projects
    getProviderProjects: builder.query({
      query: () => '/projects/provider-projects',
      providesTags: ['Projects'],
    }),

    // Status update
    updateProjectStatus: builder.mutation({
      query: ({ projectId, status }) => ({
        url: `/projects/${projectId}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Projects', 'Dashboard'],
    }),

  }),
})

export const {
  useGetMyProjectsQuery,
  useGetProviderProjectsQuery,
  useUpdateProjectStatusMutation,
} = projectApi;