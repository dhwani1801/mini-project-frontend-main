import { createSlice } from "@reduxjs/toolkit";
import { GetIntegrationAction } from "../action/integrationAction";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};


const IntegrationSlice = createSlice({
  name: 'integrations',
  initialState,
  reducers: {
    getintegrationHandler: (state:any, action:any) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetIntegrationAction.pending, (state:any) => {
      state.isLoading = true;
    });

    builder.addCase(GetIntegrationAction.fulfilled, (state:any, action:any) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(GetIntegrationAction.rejected, (state:any) => {
      state.isLoading = false;
    });
  }
});

export default IntegrationSlice;
