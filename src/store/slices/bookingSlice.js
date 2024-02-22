import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  selectedArea: null,
  parkingTimer:0
};
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    setParkingTimer:(state,action)=>{
      state.parkingTimer=action.payload
    }
  },
});
export default bookingSlice.reducer;
export const {setSelectedArea,setParkingTimer} = bookingSlice.actions;
