import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  loginToken: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginToken: (state, action) => {
      state.loginToken = action.payload;
    },
  },
});
export default authSlice.reducer;
export const {setLoginToken} = authSlice.actions;
