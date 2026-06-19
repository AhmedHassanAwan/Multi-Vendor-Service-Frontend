import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  loading: false,
  error: null,
  searchQuery: "",
  selectedCategory: "all"
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { 
  setServices, 
  setLoading, 
  setError, 
  setSearchQuery, 
  setSelectedCategory 
} = serviceSlice.actions;

export default serviceSlice.reducer;
