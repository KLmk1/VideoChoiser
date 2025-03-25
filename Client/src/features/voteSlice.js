import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const voteSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    vote: (state, action) => {
      const videoId = action.payload;
      if (!state[videoId]) {
        state[videoId] = 0;
      }
      state[videoId]++;
    }
  },
});

export const { vote } = voteSlice.actions;
export const selectVotes = state => state.votes;
export default voteSlice.reducer;
