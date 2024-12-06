import {StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

interface ToastOptions {
  type?: 'success' | 'error' | 'info';
  title: string;
  message?: string;
  position?: 'top' | 'bottom';
}

export const showToast = ({
  type = 'success', 
  title,
  message,
  position = 'top', 
}: ToastOptions): void => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    position,
    swipeable: true,
    text1Style: styles.text1,
  });
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  text2: {
    fontSize: 14,
    color: '#666',
  },
});
