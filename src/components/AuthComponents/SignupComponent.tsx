import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthHeaderView} from './HeaderComponent';
import {ONBOARDING_MODE} from '../../constants/authConstants';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import useLoader from '../../hooks/useLoader';
import {showToast} from '../common/ToastBanner';
import {useDispatch} from 'react-redux';
import {signupThunk} from '../../store/thunk/userThunk';
import { AppDispatch } from '../../store/store';

interface SigninComponentProps {
  onPressBack: (type: ONBOARDING_MODE) => void;
}

const SignupComponent = ({onPressBack}: SigninComponentProps) => {
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
      const data = {
        name: auth().currentUser?.displayName || '',
        email: auth().currentUser?.email || '',
        avatar: auth().currentUser?.photoURL || '',
        isVerified: auth().currentUser?.emailVerified || false,
      };

      await dispatch(signupThunk(data));
      hideLoader();
      showToast({title: 'Succesfully Register!!'});
    } catch (err) {
      hideLoader();
      console.log(err);
      showToast({type: 'error', title: 'Failed to Register Account'});
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeaderView
        onPress={() => {
          onPressBack(ONBOARDING_MODE.ONBOARDING);
        }}
        title={'Register'}
      />
      <View>
        <GoogleSigninButton onPress={onPressRegister} />
      </View>
      <Loader />
    </View>
  );
};

export default SignupComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});
