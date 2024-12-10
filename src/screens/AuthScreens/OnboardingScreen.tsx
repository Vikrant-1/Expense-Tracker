import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_WEB_CLIENT_ID} from '../../constants/keys';
import useLoader from '../../hooks/useLoader';
import {showToast} from '../../components/common/ToastBanner';
import {THEME, TRANSPARENT, WHITE} from '../../constants/colors';
import {ONBOARDING_MODE} from '../../constants/authConstants';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {AuthButton} from '../../components/AuthComponents/AuthButton';
import LoginComponent from '../../components/AuthComponents/LoginComponent';
import SignupComponent from '../../components/AuthComponents/SignupComponent';

const OnboardingScreen = () => {
  const {Loader, showLoader, hideLoader} = useLoader();
  const {width, height} = useWindowDimensions();
  const [mode, setMode] = useState(ONBOARDING_MODE.ONBOARDING);

  const imageHeight = useSharedValue(height * 0.7);
  const viewHeight = useSharedValue(height / 3);

  useEffect(() => {
    if (mode === ONBOARDING_MODE.ONBOARDING) {
      imageHeight.value = withTiming(height * 0.7, {duration: 500});
      viewHeight.value = withTiming(height / 3, {duration: 500});
    } else {
      imageHeight.value = withTiming(height * 0.2, {duration: 500});
      viewHeight.value = withTiming(height / 1.2, {duration: 500});
    }
  }, [mode, imageHeight, viewHeight]);

  const animatedImageStyle = useAnimatedStyle(() => ({
    height: imageHeight.value,
  }));

  const animatedViewStyle = useAnimatedStyle(() => ({
    height: viewHeight.value,
  }));

  const onPressMode = (type: ONBOARDING_MODE) => {
    if (type !== mode) {
      setMode(type);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={TRANSPARENT} />
      <Animated.View>
        <Animated.Image
          source={require('../../assets/onboarding.jpg')}
          style={[animatedImageStyle, {width}]}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.bottomContainer,
          animatedViewStyle,
          {width, backgroundColor: THEME.midnight_green.DEFAULT},
        ]}>
        {mode === ONBOARDING_MODE.ONBOARDING ? (
          <View style={{marginTop: '10%'}}>
            <AuthButton type={ONBOARDING_MODE.LOGIN} onPress={onPressMode} />
            <AuthButton type={ONBOARDING_MODE.SIGNUP} onPress={onPressMode} />
          </View>
        ) : mode === ONBOARDING_MODE.LOGIN ? (
          <LoginComponent onPressBack={onPressMode} />
        ) : (
          <SignupComponent onPressBack={onPressMode} />
        )}
      </Animated.View>
      <Loader />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEME.ash_gray[500]
  },
  imageBackground: {
    aspectRatio: 0.7,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});

// configure google Sign up
GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});
