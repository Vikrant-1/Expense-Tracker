import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {androidRipple, THEME, WHITE} from '../../constants/colors';

const FloatingButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={androidRipple} style={[styles.button]}>
        <Text style={styles.title}>Hello</Text>
      </Pressable>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.dark_cyan[500],
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
