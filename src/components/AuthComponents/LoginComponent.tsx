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

interface LoginComponentProps {
  onPressBack: (type: ONBOARDING_MODE) => void;
}

const LoginComponent = ({onPressBack}: LoginComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSubmit = () => {};
  return (
    <View style={styles.container}>
      <AuthHeaderView
        onPress={() => {
          onPressBack(ONBOARDING_MODE.ONBOARDING);
        }}
        title={'Welcome back'}
      />
      <View style={{marginTop: 20}}>
        <CustomTextInput value={email} onChangeText={setEmail} />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
       
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
