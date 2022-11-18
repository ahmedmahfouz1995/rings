import { configureStore } from "@reduxjs/toolkit";
import { ringsReducer } from "./reducer/ringsReducer";
import { cartReducer } from "./reducer/cartReducer";

export const store = configureStore({
  reducer: {
    ringList: ringsReducer,
    cart: cartReducer,
  },
});
