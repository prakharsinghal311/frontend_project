import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState: initialItemState,
  reducers: {
    addItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (i) => i.productId === action.payload.productId
      );
      if (existingItemIndex === -1) {
        state.items = [...state.items, action.payload];
      } else {
        const temp = [...state.items];
        temp[existingItemIndex].quantity =
          parseInt(temp[existingItemIndex].quantity) + 1;
        state.items = temp;
      }
    },
    removeItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (i) => i.id === action.payload
      );

      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      state.items = updatedItems;
    },
    updateItem(state, action) {
      state.items = action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
