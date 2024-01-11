import api from "../../store/api";

const resolutionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // api endpoints
    getResolutions: builder.query({
      query: () => "/resolutions",
      providesTags: ["Resolutions"],
    }),

    getResolution: builder.query ({
      //this end point is used to fetch a specific reslution by the id 
      query: (id) => `/resolutions/${id}`,
      providesTags: ["Resolution"],
    }),

    createResolution: builder.mutation({
      query: (resolution) => ({
        url: "/resolutions",
        method: "POST",
        body: resolution,
      }),
      invalidatesTags: ["Resolutions"],
    }),

    deleteResolution: builder.mutation({
      query: (id) => ({
        url: `/resolutions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Resolutions"],
    }),

    updateResolution: builder.mutation({
      query: (updatedResolution) => ({
        url: `/resolutions/${updatedResolution.id}`,
        method: "PUT",
        body: updatedResolution,
      }),
      invalidatesTags: ["Resolution"],
    }),
  }),
});

export const {
  useGetResolutionsQuery,
  useGetResolutionQuery,
  useCreateResolutionMutation,
  useDeleteResolutionMutation,
  useUpdateResolutionMutation,
} = resolutionApi;
