import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  data: {},
  userName:''
};
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.data = action.payload;
      console.log('profile add handler', state);
    },
    setProfile: state => {
      console.log('profile set handler', state.data);
    },
   
  },
});
export default userProfileSlice.reducer;
export const {addProfile, setProfile} = userProfileSlice.actions;
