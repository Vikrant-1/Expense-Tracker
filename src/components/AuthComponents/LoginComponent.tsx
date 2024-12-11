import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {THEME} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ONBOARDING_MODE} from '../../constants/authConstants';
import {AuthHeaderView} from './HeaderComponent';
import CustomTextInput from '../common/CustomTextInput';
import { AuthButton } from './AuthButton';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import useLoader from '../../hooks/useLoader';
import {showToast} from '../common/ToastBanner';
import {useDispatch} from 'react-redux';
import {loginThunk, signupThunk} from '../../store/thunk/userThunk';
import { AppDispatch } from '../../store/store';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../constants/routes';

interface LoginComponentProps {
  onPressBack: (type: ONBOARDING_MODE) => void;
}

const LoginComponent = ({ onPressBack }: LoginComponentProps) => {
  const navigation = useNavigation();
  const {Loader, showLoader, hideLoader} = useLoader();
  const dispatch = useDispatch<AppDispatch>();

  const onPressRegister = async () => {
    try {
      showLoader();
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        response.data?.idToken ?? '',
      );
      await auth().signInWithCredential(googleCredential);

      await dispatch(loginThunk());
      navigation.reset({index: 0, routes: []})
      hideLoader();
    } catch (err) {
      hideLoader();
      console.log(err);
      showToast({type: 'error', title: 'Failed to Login Account'});
    }
  };
  return (
    <View style={styles.container}>
      <AuthHeaderView
        onPress={() => {
          onPressBack(ONBOARDING_MODE.ONBOARDING);
        }}
        title={'Welcome back'}
      />
      <View style={{marginTop: 20}}>
      
        <GoogleSigninButton onPress={onPressRegister} />
      <Loader />
       
      </View>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});
