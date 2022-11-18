import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rings: [],
  isLoading: false,
  error: null,
};

export const getRings = createAsyncThunk(
  "rings/getRings",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(" http://localhost:3005/Images");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const viewProduct = createAsyncThunk(
  "rings/viewProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(` http://localhost:3005/Images/${id}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);


const ringsSlice = createSlice({
  name: "rings",
  initialState,
  reducers: {},
  extraReducers: {
    [getRings.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getRings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rings = action.payload;
    },
    [getRings.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [viewProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [viewProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.prouctInfo= action.payload;
    },
    [viewProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  
    
  },
});

export const ringsReducer = ringsSlice.reducer;
export const ringsActions = ringsSlice.actions;
