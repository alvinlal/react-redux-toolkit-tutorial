import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cakeReducer from '../components/cake/cakeSlice.js';
import icecreamReducer from '../components/icecream/icecreamSlice.js';
import userReducer from '../components/user/userSlice.js';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;
