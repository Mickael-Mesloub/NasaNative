import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './BottomTabBarStyles';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/home/Home';
import Gallery from '../../screens/gallery/Gallery';

const Tab = createMaterialBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Gallery" component={Gallery} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
