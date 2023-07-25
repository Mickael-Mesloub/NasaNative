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
</Stack.Navigator>;
