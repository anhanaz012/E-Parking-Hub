import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  loginToken: '',
  spaceData: null,
  imageUri: '',
  personalData: null,
  slotsData: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginToken: (state, action) => {
      state.loginToken = action.payload;
    },
    setSpaceData: (state, action) => {
      state.spaceData = action.payload;
    },
  },
});
export default authSlice.reducer;
export const {setLoginToken,setSpaceData} = authSlice.actions;
