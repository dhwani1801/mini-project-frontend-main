import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../action/loginAction";
import { toastText } from "../../utils/utils";

const initialState: any = {
  isLoading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action: any) => {
      state.isLoading = false;
      toastText(action?.payload?.message, "success");
    });
    builder.addCase(loginAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
      if (action?.payload?.responseStatus !== 409) {
        toastText(action?.payload?.message, "error");
      }
    });
  },
});

export default AuthSlice;
