import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
