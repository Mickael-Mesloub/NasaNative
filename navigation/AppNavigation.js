import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabBar from '../components/bottomTabBar/BottomTabBar';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabBar />
    </NavigationContainer>
  );
};

export default AppNavigation;
