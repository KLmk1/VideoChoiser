import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
