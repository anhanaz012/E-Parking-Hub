import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import { store } from './src/store';
const App = () => {
  LogBox.ignoreLogs([
    'new NativeEventEmitter',
    'Each child in a list should have a unique "key" prop',
    'No background message handler has been set.',
    'No task registered for key ReactNativeFirebaseMessagingHeadlessTask',
  ]);
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
   
    </>
  );
};
export default App;
