import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    toggle: '',
    feedback: false,
    viewPop: false,
  },
  reducers: {
    viewToggle : (state,action) => {
      state.toggle = action.payload
    },
    changeLayout : (state) => {
      state.feedback = !state.feedback
    }
  },
});

export const { viewToggle , changeLayout} = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
