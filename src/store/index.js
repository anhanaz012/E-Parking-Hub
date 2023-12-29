import {configureStore} from '@reduxjs/toolkit';
import userProfileReducer from './slices/userProfileSlice';
import authReducer from './slices/authSlice';
export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    auth: authReducer,
  },
});
