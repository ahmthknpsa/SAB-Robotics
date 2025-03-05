// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import navigationReducer from "./navigationSlice"
import ugvReducer from "./ugvSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navigationReducer,
    ugv: ugvReducer
  },
});

export default store;
