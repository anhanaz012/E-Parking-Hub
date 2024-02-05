import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation';
import {store} from './src/store';
import CountdownTimer from './src/components/CountdownTimer/CountdownTimer';

const App = () => {
  LogBox.ignoreLogs([
    'new NativeEventEmitter',
    'Each child in a list should have a unique "key" prop',
  ]);
  return (
    <>
      {/* <Provider store={store}>
        <AppNavigator />
      </Provider> */}
      <CountdownTimer durationInSeconds={50} />
    </>
  );
};

export default App;
