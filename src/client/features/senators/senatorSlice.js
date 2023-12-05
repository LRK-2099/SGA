

import api from "./store/api";

// export default senatorSlice.reducer;
const senatorApi = api.injectEndpoints({
  endpoints: (builder) => ({

      //This is useGetSenatorsQuery
      getSenators: builder.query({
          //the /senators is grabbing the backend api, so in our backend we grab the senator data by localhost:3000/api/senators,
          // so we need to put /senators
          query: () => '/senators',
          //transform response here, but i don't think we will need it
          providesTags: ['Senators'],
      }),


      //This is useGetSenatorQuery
      getSenator: builder.query({
          query: (id) => `/senators/${id}`,
          //transform response here, but i don't think we need it.
          providesTags: ['Senator'],
      }),

      createSenator: builder.mutation({
          query: (senator) => ({
              url: '/senators',
              method: 'POST',
              body: senator,
          }),
          invalidatesTags: ['Senators'], 
      }),
      deleteSenator: builder.mutation({
          query: (id) => ({
              url: `/senators/${id}`,
              method: "DELETE",
          }),
          invalidatesTags: ['Senators']
      }),
      updateSenator: builder.mutation({
          query: (updatedSenator) => ({
              url: `/senators/${updatedSenator.id}`,
              method: "PUT",
              body: updatedSenator,
              
          }),
          invalidatesTags: ['Senator'],
      }),
  }),
});

export const  { useGetSenatorsQuery, useGetSenatorQuery, useCreateSenatorMutation, useDeleteSenatorMutation, useUpdateSenatorMutation} = senatorApi
