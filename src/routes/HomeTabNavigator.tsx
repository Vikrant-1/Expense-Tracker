import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../constants/routes';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import SettingScreen from '../screens/TabScreens/SettingScreen';
import ExpenseScreen from '../screens/TabScreens/ExpenseScreen';
import SplitExpenseScreen from '../screens/TabScreens/SplitExpenseScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Dashboard',
        }}
        name={routes.dashboard}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'Expense',
        }}
        name={routes.expenses}
        component={ExpenseScreen}
      />
      <Tab.Screen
        options={{
          title: 'Split',
        }}
        name={routes.splitexpense}
        component={SplitExpenseScreen}
      />

      <Tab.Screen
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
        }}
        name={routes.settings}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({});
