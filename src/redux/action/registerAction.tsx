import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../apis';

export const registerAction = createAsyncThunk(
    "auth/register",
    async (data: any, { rejectWithValue }) => {
      try {
        const response = await postApi("/auth/register", data);
  
        return response.data;
      } catch (error: any) {
        if (!error.response) {
          throw error;
        }
        return rejectWithValue(error?.response?.data);
      }
    }
  );
  