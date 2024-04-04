import { configureStore } from '@reduxjs/toolkit'
import { wishListReducer } from './slices/wishSlice';
const store = configureStore({
  reducer: {
    wishListReducer
  }
});

export default store;