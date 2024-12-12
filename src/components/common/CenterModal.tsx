import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import Animated, {StyleProps} from 'react-native-reanimated';
import {BLACK, BLACK_40, THEME, WHITE} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

interface CenterModalProps {
  isVisible: boolean;
  animatedStyle: StyleProps;
  overlayStyle: StyleProps;
  children: ReactNode;
  onDismiss: () => void;
}

const CenterModal: React.FC<CenterModalProps> = ({
  isVisible,
  animatedStyle,
  overlayStyle,
  children,
  onDismiss,
}) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.modal}>
        <TouchableWithoutFeedback onPress={onDismiss}>
          <Animated.View style={[styles.overlay, overlayStyle]} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.modalContainer, animatedStyle]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: BLACK_40,
  },
  modalContainer: {
    width: width * 0.95,
    padding: 20,
    backgroundColor: WHITE,
    borderRadius: 12,
    elevation: 5,
    shadowColor: BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default CenterModal;
