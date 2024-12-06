import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import {routes} from '../constants/routes';
import OnboardingScreen from '../screens/AuthScreens/OnboardingScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import { getCurrentUserId } from '../utils/firebase';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = getCurrentUserId();
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
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.onboarding}
            component={OnboardingScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.login}
            component={LoginScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
