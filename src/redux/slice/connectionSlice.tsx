import { createSlice } from '@reduxjs/toolkit';
import { setSelectConnectState } from '../action/connectionAction';
import {
  integrationsAccountCards,
} from '../../utils/staticObjects';

const initialState: any = {
  data: {
    integrationsAccountCards,
    connectionCount: 2
  },
  isLoading: false,
  error: null
};

const Connection = createSlice({
  name: 'setSelectConnectState',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSelectConnectState.fulfilled, (state, action) => {
       // Update the state's data with the payload received from setSelectConnectState action
      state.data = action.payload;
    });
  }
});
export default Connection;
