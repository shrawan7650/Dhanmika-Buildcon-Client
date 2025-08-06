import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getServices, type Service } from "@/lib/firebase"

interface ServicesState {
  services: Service[]
  loading: boolean
  error: string | null
}

const initialState: ServicesState = {
  services: [],
  loading: false,
  error: null,
}

export const fetchServices = createAsyncThunk("services/fetchServices", async () => {
  return await getServices()
})

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false
        state.services = action.payload
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch services"
      })
  },
})
