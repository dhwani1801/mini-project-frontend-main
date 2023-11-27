import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from '../apis';

export const loginAction = createAsyncThunk(
  "auth/Login",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await postApi("/auth/login", data);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
  