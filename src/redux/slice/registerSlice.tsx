import { createSlice } from "@reduxjs/toolkit";
import { registerAction } from '../action/registerAction';
import { toastText } from '../../utils/utils';

const initialState: any = {
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerAction.fulfilled, (state, action: any) => {
      state.isLoading = false;
      localStorage.setItem("accessToken", action?.payload?.data?.accessToken);
      localStorage.setItem("refreshToken", action?.payload?.data?.refreshToken);
    });
    builder.addCase(registerAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
      toastText(action?.payload?.message, "error");
    });
  },
});

export default registerSlice;
