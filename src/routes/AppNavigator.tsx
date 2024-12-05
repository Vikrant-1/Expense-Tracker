import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = false;
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="tabs"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AuthNavigator />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
