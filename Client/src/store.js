import { configureStore } from '@reduxjs/toolkit';
import voteReducer from './features/voteSlice';

export const store = configureStore({
  reducer: {
    votes: voteReducer,
  },
});
