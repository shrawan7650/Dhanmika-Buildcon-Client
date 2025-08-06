import { configureStore } from "@reduxjs/toolkit"
import { projectsSlice } from "./slices/projects-slice"
import { servicesSlice } from "./slices/services-slice"
import { testimonialsSlice } from "./slices/testimonials-slice"

export const store = configureStore({
  reducer: {
    projects: projectsSlice.reducer,
    services: servicesSlice.reducer,
    testimonials: testimonialsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
