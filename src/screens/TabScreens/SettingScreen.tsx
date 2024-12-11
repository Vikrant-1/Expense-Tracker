import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tile from '../../components/common/Tile';
import {authSignOut} from '../../utils/firebase';
import useLoader from '../../hooks/useLoader';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {setUserThunk} from '../../store/thunk/userThunk';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {routes} from '../../constants/routes';
import { resetRootNavigationTo } from '../../utils/navigationUtils';

const SettingScreen = () => {
  const {showLoader, hideLoader, Loader} = useLoader();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const settingsData = [
    {
      title: 'Account',
      subTitle: 'Manage your profile and account',
      icon: 'person',
    },
    {
      title: 'Customization',
      subTitle: 'Personalize your app experience',
      icon: 'palette',
    },
    {
      title: 'Expense Management',
      subTitle: 'Configure your expense settings',
      icon: 'attach-money',
    },
    {
      title: 'Security & Privacy',
      subTitle: 'Protect your account and data',
      icon: 'lock',
    },
    {
      title: 'Notifications',
      subTitle: 'Manage your notification preferences',
      icon: 'notifications',
    },
    {
      title: 'Integration',
      subTitle: 'Connect with other apps and services',
      icon: 'sync',
    },
    {
      title: 'App Information',
      subTitle: 'Details about this app',
      icon: 'info',
    },
  ];

  const handleOnPressTile = () => {};

  const onPressLogout = async () => {
    try {
      showLoader();
      await authSignOut();
      await dispatch(setUserThunk({ id: '' }));
      resetRootNavigationTo({screen:routes.onboarding});
      hideLoader();
    } catch (error) {
      hideLoader();
    }
  };
  return (
    <ScrollView style={styles.screen}>
      {settingsData.map((item, index) => (
        <Tile
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          icon={item.icon}
          onPress={handleOnPressTile}
        />
      ))}
      <Button title="Logout" onPress={onPressLogout} />
      <Loader />
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
