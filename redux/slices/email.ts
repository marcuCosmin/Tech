import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
  name: 'email',
  initialState: '',
  reducers: {
    update: (state, action) => (state = action.payload),
  },
});

export const update = emailSlice.actions;
export default emailSlice.reducer;
