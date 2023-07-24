import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/Home';
import {COLORS, FONT} from '../constants/theme';
import logo from '../assets/logo.png';
import ScreenHeader from '../components/screenHeader/ScreenHeader';
import BottomTabBar from '../components/bottomTabBar/BottomTabBar';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: 'NASA',
            headerTitleStyle: {
              fontFamily: FONT.nasa,
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.secondary,
            },
            headerLeft: () => {
              return (
                <ScreenHeader
                  iconUrl={logo}
                  dimension={'100%'}
                  handlePress={() => navigation.navigate('Home')}
                />
              );
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
