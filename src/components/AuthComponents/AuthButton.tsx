import LinearGradient from 'react-native-linear-gradient';
import {ONBOARDING_MODE} from '../../constants/authConstants';
import {THEME, WHITE} from '../../constants/colors';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { DynamicStyleSheet, useDynamicStyleSheet } from 'react-native-dynamic';

export const AuthButton = ({
  type,
  onPress,
}: {
  type: ONBOARDING_MODE;
  onPress: (type: ONBOARDING_MODE) => void;
  }) => {
  const styles = useDynamicStyleSheet(dynamicStyles);
  return (
    <LinearGradient
      style={styles.authButton}
      colors={['#EF4444', '#FCA5A5']}>
      <TouchableOpacity
        style={styles.authButtonView}
        onPress={() => onPress(type)}>
        <Text style={styles.authButtonText}>
          {type === ONBOARDING_MODE.LOGIN ? 'Log in' : 'Sign up'}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const dynamicStyles = new DynamicStyleSheet({
  authButton: {
    borderRadius: 16,
    marginTop: 20,
    marginHorizontal: 20,
  },
  authButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  authButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: WHITE,
    textAlign: 'center',
  },
});
