import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthHeaderView} from './HeaderComponent';
import {ONBOARDING_MODE} from '../../constants/authConstants';

interface SigninComponentProps {
  onPressBack: (type: ONBOARDING_MODE) => void;
}

const SignupComponent = ({onPressBack}: SigninComponentProps) => {
  return (
    <View style={styles.container} >
      <AuthHeaderView
        onPress={() => {
          onPressBack(ONBOARDING_MODE.ONBOARDING);
        }}
        title={'Register'}
      />
    </View>
  );
};

export default SignupComponent;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 10
    },
});
