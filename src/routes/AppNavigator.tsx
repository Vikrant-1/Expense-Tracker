import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import {routes} from '../constants/routes';
import OnboardingScreen from '../screens/AuthScreens/OnboardingScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import {getCurrentUserId} from '../utils/firebase';
import ContactListScreen from '../screens/SplitScreens/ContactScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />

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
      <Stack.Screen
        name={routes.contacts}
        component={ContactListScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
