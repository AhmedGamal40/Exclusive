import { configureStore } from '@reduxjs/toolkit';
import  counter   from '../Slice/Counter';
// Import your reducers here

export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter ,
  },
});
