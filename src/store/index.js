import {configureStore} from '@reduxjs/toolkit';
import userProfileReducer from './slices/userProfileSlice';
import authReducer from './slices/authSlice';
import areaReducer from './slices/areaSlice';
import bookingReducer from './slices/bookingSlice';
export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    auth: authReducer,
    area: areaReducer,
    booking: bookingReducer,
  },
});
