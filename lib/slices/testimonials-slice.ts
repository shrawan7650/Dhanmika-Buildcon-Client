import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getTestimonials, type Testimonial } from "@/lib/firebase"

interface TestimonialsState {
  testimonials: Testimonial[]
  loading: boolean
  error: string | null
}

const initialState: TestimonialsState = {
  testimonials: [],
  loading: false,
  error: null,
}

export const fetchTestimonials = createAsyncThunk("testimonials/fetchTestimonials", async () => {
  return await getTestimonials()
})

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false
        state.testimonials = action.payload
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch testimonials"
      })
  },
})
