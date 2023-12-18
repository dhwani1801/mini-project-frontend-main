import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import registerSlice from "./slice/registerSlice";
import IntegrationSlice from "./slice/integrationSlice";
import customerSlice from "./slice/customerSlice";

const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
    register: registerSlice.reducer,
    Integration: IntegrationSlice.reducer,
    Customer: customerSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
