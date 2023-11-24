import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';

const store = configureStore({
	reducer: {
		auth: loginSlice.reducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
