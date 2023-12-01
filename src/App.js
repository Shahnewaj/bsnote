import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigation from './navigation/AppNavigation';

import {Provider} from 'react-redux';
import {store} from './store/index.js';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
