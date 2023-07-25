// import {COLORS, FONT} from '../../constants/theme';
// import HomeScreen from '../../screens/home/HomeScreen';
// import ScreenHeader from '../screenHeader/ScreenHeader';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import logo from '../../assets/logo.png';

// const Stack = createNativeStackNavigator();

// const HeaderBar = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={({navigation}) => ({
//           headerTitle: 'NASA',
//           headerTitleStyle: {
//             fontFamily: FONT.nasa,
//           },
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: COLORS.secondary,
//           },
//           headerLeft: () => {
//             return (
//               <ScreenHeader
//                 iconUrl={logo}
//                 dimension={'100%'}
//                 handlePress={() => navigation.navigate('Home')}
//               />
//             );
//           },
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

// export default HeaderBar;
