import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  parkingAreas: [],
  selectedArea: null,
  areaDetails: null,
  vendorToken: null,
  userToken: null,
  areaImage: null,
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
    setVendorToken: (state, action) => {
      state.vendorToken = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setAreaImage: (state, action) => {
      state.areaImage = action.payload;
    }
  },
});
export default areaSlice.reducer;
export const {setParkingAreas, setSelectedArea,setAreaDetails,setVendorToken,setUserToken,setAreaImage} = areaSlice.actions;
