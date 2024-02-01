import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  selectedArea: null,
};
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
  },
});
export default bookingSlice.reducer;
export const {setSelectedArea} = bookingSlice.actions;
