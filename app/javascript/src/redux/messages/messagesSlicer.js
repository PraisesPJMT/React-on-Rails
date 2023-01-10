import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// Actions
const GET_MESSAGES = "GET_MESSAGES";

const initialState = {
  message: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: "mission",
};

// Thunks
export const getMessage = createAsyncThunk(GET_MESSAGES, async () => {
  try {
    return await api.fetchMessage();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getMessage.fulfilled, (state, action) => ({
        ...state,
        message: action.payload,
        status: "succeeded",
      }))
      .addCase(getMessage.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

export const randomMessage = (state) => state.message.greeting;
export const allStatus = (state) => state.missions.status;

export default messagesSlice.reducer;
