import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import {routes} from '../constants/routes';
import OnboardingScreen from '../screens/AuthScreens/OnboardingScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ContactListScreen from '../screens/SplitScreens/ContactScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BackIcon } from '../components/navigationComponents';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        animation: 'fade',
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
      <Stack.Screen
        name={routes.addexpense}
        component={AddExpenseScreen}
        options={({navigation}) => ({
          headerTitle: 'Add Expense',
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerLeft: () => <BackIcon/>,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
