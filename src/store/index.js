import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import itemReducer from "./item";

const store = configureStore({
  reducer: { auth: authReducer, item: itemReducer },
});

export default store;
