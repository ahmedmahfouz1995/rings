import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  logged: false,
};

export const register = createAsyncThunk(
  "user/register",
  async (Mydata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return Mydata;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const logIn= createAsyncThunk(
  "user/logIn",
  async (Mydata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return Mydata;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);


const ringsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    
    [register.fulfilled]: (state, action) => {
      state.data.push(action.payload)
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logIn.fulfilled]: (state, action) => {
      const exist = state.data.find(action.payload)
      if (exist){
        state.logged=true
      }else{
        state.logged=false
      }

    },
    [logIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
  
    
  },
});

export const ringsReducer = ringsSlice.reducer;
export const ringsActions = ringsSlice.actions;
