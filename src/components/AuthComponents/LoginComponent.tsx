import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {THEME} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ONBOARDING_MODE} from '../../constants/authConstants';
import {AuthHeaderView} from './HeaderComponent';

interface LoginComponentProps {
  onPressBack: (type: ONBOARDING_MODE) => void;
}

const LoginComponent = ({onPressBack}: LoginComponentProps) => {
  return (
    <View style={styles.container}>
      <AuthHeaderView
        onPress={() => {
          onPressBack(ONBOARDING_MODE.ONBOARDING);
        }}
        title={'Welcome back'}
      />
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 10
    },
});
