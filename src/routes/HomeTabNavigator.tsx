import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {routes} from '../constants/routes';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import SettingScreen from '../screens/TabScreens/SettingScreen';
import ExpenseScreen from '../screens/TabScreens/ExpenseScreen';
import SplitExpenseScreen from '../screens/TabScreens/SplitExpenseScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#6200ea', // Active icon color
        tabBarInactiveTintColor: '#757575', // Inactive icon color
        tabBarStyle: {backgroundColor: '#ffffff'}, // Background color of the tab bar
      }}>
      <Tab.Screen
        options={{
          title: 'Dashboard',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="dashboard"
              size={size || 24}
              color={focused ? '#6200ea' : color}
            />
          ),
        }}
        name={routes.dashboard}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'Expense',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="attach-money"
              size={size || 24}
              color={focused ? '#6200ea' : color}
            />
          ),
        }}
        name={routes.expenses}
        component={ExpenseScreen}
      />
      <Tab.Screen
        options={{
          title: 'Splits',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="group"
              size={size || 24}
              color={focused ? '#6200ea' : color}
            />
          ),
        }}
        name={routes.splitexpense}
        component={SplitExpenseScreen}
      />
      <Tab.Screen
        options={{
          title: 'Settings',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="settings"
              size={size || 24}
              color={focused ? '#6200ea' : color}
            />
          ),
        }}
        name={routes.settings}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
