import api from "../../store/api";

const appointmentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // api endpoints
    getAppointments: builder.query({
      query: () => "/appointments",
      providesTags: ["Appointments"],
    }),

    getAppointment: builder.query({
      query: (id) => `/appointments/${id}`,
      // Transform response here, but I don't think we need it.
      providesTags: ["Appointment"],
    }),


    //this is a componenet used to scheduale appointments 
    createAppointment: builder.mutation({
      query: (appointment) => ({
        url: "/appointments",
        method: "POST",
        body: appointment,
      }),
      invalidatesTags: ["Appointments"],
    }),

    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Appointments"],
    }),

    updateAppointment: builder.mutation({
      query: (updatedAppointment) => ({
        url: `/appointments/${updatedAppointment.id}`,
        method: "PUT",
        body: updatedAppointment,
      }),
      invalidatesTags: ["Appointment"],
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentQuery,
  useCreateAppointmentMutation,
  useDeleteAppointmentMutation,
  useUpdateAppointmentMutation,
} = appointmentApi;