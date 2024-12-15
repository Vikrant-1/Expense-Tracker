import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {androidRipple, THEME, WHITE} from '../../constants/colors';
import { DynamicStyleSheet, useDynamicStyleSheet } from 'react-native-dynamic';

const FloatingButton = () => {
  const styles = useDynamicStyleSheet(dynamicStyles);
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={androidRipple} style={[styles.button]}>
        <Text style={styles.title}>Hello</Text>
      </Pressable>
    </View>
  );
};

export default FloatingButton;

const dynamicStyles = new DynamicStyleSheet({
  button: {
    backgroundColor: THEME.background.DEFAULT,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: WHITE,
  },
  buttonContainer: {
    borderRadius: 8,
    position: 'absolute',
    bottom: 75,
    right: 25,
  },
});
