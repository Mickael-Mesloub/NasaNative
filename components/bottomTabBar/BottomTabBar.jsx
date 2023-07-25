import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../../screens/home/HomeScreen';
import Gallery from '../../screens/gallery/GalleryScreen';
import {COLORS, FONT} from '../../constants/theme';

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const galleryName = 'Gallery';

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      activeTintColor={COLORS.tertiary}
      inactiveTintColor={COLORS.primary}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          color = focused ? COLORS.tertiary : COLORS.primary;
          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === galleryName) {
            iconName = focused ? 'images' : 'images-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={galleryName} component={Gallery} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
