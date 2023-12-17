import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../apis";

export const CreateIntegrationAction = createAsyncThunk(
  "integration/createIntegration",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await postApi(`/integration/connect`, values);

      return response.data.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const GetIntegrationAction = createAsyncThunk(
  "integration/getIntegration",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getApi(
        `/integration/getntegration/${localStorage.getItem("companyId")}`
      );

      return response.data.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
