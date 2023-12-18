import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../apis";

export const CustomerAction = createAsyncThunk(
  "qbo/customer/:companyId",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await postApi("/qbo/customer/:companyId", data);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
