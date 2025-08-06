import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getProjects, getFeaturedProjects, type Project } from "@/lib/firebase"

interface ProjectsState {
  projects: Project[]
  featuredProjects: Project[]
  loading: boolean
  error: string | null
  filters: {
    category: string
    search: string
    sortBy: "latest" | "year" | "category"
  }
}

const initialState: ProjectsState = {
  projects: [],
  featuredProjects: [],
  loading: false,
  error: null,
  filters: {
    category: "all",
    search: "",
    sortBy: "latest",
  },
}

export const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
  return await getProjects()
})

export const fetchFeaturedProjects = createAsyncThunk("projects/fetchFeaturedProjects", async () => {
  return await getFeaturedProjects()
})

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = initialState.filters
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false
        state.projects = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch projects"
      })
      .addCase(fetchFeaturedProjects.fulfilled, (state, action) => {
        state.featuredProjects = action.payload
      })
  },
})

export const { setFilter, clearFilters } = projectsSlice.actions
