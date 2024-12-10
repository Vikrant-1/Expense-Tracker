import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  leftComponent?: React.ReactNode; // Component to render on the left
  rightComponent?: React.ReactNode; // Component to render on the right
  containerStyle?: ViewStyle; // Additional styling for the container
  inputStyle?: ViewStyle; // Additional styling for the TextInput
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  leftComponent,
  rightComponent,
  containerStyle,
  inputStyle,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftComponent && (
        <View style={styles.leftComponent}>{leftComponent}</View>
      )}
      <TextInput
        style={[styles.input, inputStyle]}
        {...textInputProps}
        placeholderTextColor="#999"
      />
      {rightComponent && (
        <TouchableOpacity style={styles.rightComponent}>
          {rightComponent}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 10,
  },
  leftComponent: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightComponent: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTextInput;
