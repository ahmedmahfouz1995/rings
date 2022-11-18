import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  cart: [],
  count: 0,
  productInfo : []
};
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return product
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const View = createAsyncThunk(
  "cart/View",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return product
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return product
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   
  },
  extraReducers: {
   
    [addToCart.fulfilled]: (state, action) => {
      state.count +=1;
      state.cart.push(action.payload) ;
    },
    [View.fulfilled]: (state, action) => {
      state.productInfo=[]
      state.productInfo.push(action.payload);
      console.log(state.productInfo);
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.count -= 1;
      state.cart= state.cart.filter((product)=>{
        return product.id !==action.payload.id
      });
    }
  
    
  },
});


export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
