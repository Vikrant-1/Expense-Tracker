import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import {routes} from '../constants/routes';
import OnboardingScreen from '../screens/AuthScreens/OnboardingScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ContactListScreen from '../screens/SplitScreens/ContactScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        animation:'fade',
      }}>
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
        options={{
          headerTitle: 'Contacts',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
