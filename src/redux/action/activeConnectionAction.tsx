import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteApi, getApi } from "../apis";

export const getActiveConnectionAction = createAsyncThunk(
  "connection/services",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getApi(`/connection/services`);
      console.log("response: ", response);
      return response.data.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteConnection = createAsyncThunk(
  "connection/delete",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await deleteApi(`/connection/${params.id}`);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
