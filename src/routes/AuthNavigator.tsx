import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../constants/routes';
import OnboardingScreen from '../screens/AuthScreens/OnboardingScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Group>
      <Stack.Screen name={routes.onboarding} component={OnboardingScreen} />
      <Stack.Screen name={routes.login} component={LoginScreen} />
    </Stack.Group>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
