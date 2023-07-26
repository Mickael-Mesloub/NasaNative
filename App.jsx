import {GestureHandlerRootView} from 'react-native-gesture-handler';

import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
