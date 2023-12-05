import api from "../../store/api";

// export default senatorSlice.reducer;
const senatorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSenators: builder.query({
      query: () => "/senators",

      providesTags: ["Senators"],
    }),

    // This is useGetSenatorQuery
    getSenator: builder.query({
      query: (id) => `/senators/${id}`,
      // Transform response here, but I don't think we need it.
      providesTags: ["Senator"],
    }),

    createSenator: builder.mutation({
      query: (senator) => ({
        url: "/senators",
        method: "POST",
        body: senator,
      }),
      invalidatesTags: ["Senators"],
    }),
    deleteSenator: builder.mutation({
      query: (id) => ({
        url: `/senators/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Senators"],
    }),
    updateSenator: builder.mutation({
      query: (updatedSenator) => ({
        url: `/senators/${updatedSenator.id}`,
        method: "PUT",
        body: updatedSenator,
      }),
      invalidatesTags: ["Senator"],
    }),
  }),
});

export const {
  useGetSenatorsQuery,
  useGetSenatorQuery,
  useCreateSenatorMutation,
  useDeleteSenatorMutation,
  useUpdateSenatorMutation,
} = senatorApi;
