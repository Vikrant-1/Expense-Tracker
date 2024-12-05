import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../constants/routes';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import SettingScreen from '../screens/TabScreens/SettingScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.dashboard} component={HomeScreen} />
      <Tab.Screen name={routes.settings} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({});
