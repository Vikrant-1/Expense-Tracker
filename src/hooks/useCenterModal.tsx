import {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import {useState} from 'react';

export const useCenterModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scale = useSharedValue(0);

  const overlayOpacity = useSharedValue(0);

  const showModal = (): void => {
    setIsVisible(true);
    scale.value = withSpring(1, {damping: 15});
    overlayOpacity.value = withTiming(1, {duration: 300});
  };

  const hideModal = (): void => {
    scale.value = withSpring(0, {damping: 15}, finished => {
      if (finished) {
        runOnJS(setIsVisible)(false);
      }
    });
    overlayOpacity.value = withTiming(0, {duration: 300});
  };

  const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: overlayOpacity.value,
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  return {
    isVisible,
    animatedStyle,
    overlayStyle,
    showModal,
    hideModal,
  };
};
