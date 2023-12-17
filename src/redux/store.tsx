import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import registerSlice from "./slice/registerSlice";
import IntegrationSlice from "./slice/integrationSlice";
import customerSlice from "./slice/customerSlice";
import Connection from "./slice/connectionSlice";

const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
    register: registerSlice.reducer,
    Integration: IntegrationSlice.reducer,
    Connection: Connection.reducer,
    Customer: customerSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
