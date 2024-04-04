import { createSlice } from "@reduxjs/toolkit";
import { SingleImgData } from "../../interface";

const initialState: SingleImgData[] = [];

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishList(state, action) {
      state.push(action.payload);
    },
    removeWishList(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addWishList, removeWishList } = wishListSlice.actions;

export const wishListReducer = wishListSlice.reducer;