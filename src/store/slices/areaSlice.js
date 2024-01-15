import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  parkingAreas: [],
  selectedArea: null,
  areaDetails: null,
};
const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setParkingAreas: (state, action) => {
      state.parkingAreas = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    setAreaDetails: (state, action) => {
      state.areaDetails = action.payload;
    },
  },
});
export default areaSlice.reducer;
export const {setParkingAreas, setSelectedArea,setAreaDetails} = areaSlice.actions;
