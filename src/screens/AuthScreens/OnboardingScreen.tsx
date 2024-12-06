import { StyleSheet, View} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { GOOGLE_WEB_CLIENT_ID } from '../../constants/keys';
import useLoader from '../../hooks/useLoader';
import { showToast } from '../../components/common/ToastBanner';

const OnboardingScreen = () => {
  // configure google Sign up 
  GoogleSignin.configure({
    webClientId:GOOGLE_WEB_CLIENT_ID,
  });

  const {Loader,showLoader,hideLoader } = useLoader();

  const handleGoogleSignUp = async () => {
    try {
      showLoader();
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        response.data?.idToken ?? '',
      );
      await auth().signInWithCredential(googleCredential);
      hideLoader();
      showToast({ title: 'Succesfully Logged In !!' });
    } catch (err) {
      hideLoader();
      console.log(err);
      showToast({ type: "error", title: 'Failed toLogin', message: err?.message || '' });
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <GoogleSigninButton onPress={handleGoogleSignUp} />
      <Loader />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
