import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const options = { method: 'GET' };
export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', () => fetch('http://127.0.0.1:3000/v1/greetings', options)
  .then((response) => response.json())
  .then((data) => data.message));

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: 'Hello',
  reducers: {
    randomGreeting: (state, action) => {
      const newState = action.payload;
      return newState;
    },
  },
  extraReducers: {
    [fetchRandomGreeting.fulfilled]: (state, action) => {
      const newState = action.payload;
      return newState;
    },
  },
});

export default greetingSlice.reducer;
export const { randomGreeting } = greetingSlice.actions;
