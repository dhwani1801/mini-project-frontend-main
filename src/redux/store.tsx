import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import registerSlice from './slice/registerSlice';
const store = configureStore({
	reducer: {
		auth: loginSlice.reducer,
		register : registerSlice.reducer
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
