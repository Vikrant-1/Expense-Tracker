import React from 'react';
import { ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Pressable } from 'react-native';

interface ScaleViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

const ScaleView: React.FC<ScaleViewProps> = ({ children, style, onPress }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.92, { damping: 10, stiffness: 150 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 10, stiffness: 150 });
  };

  return (
    <Animated.View style={[animatedStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[style]}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default ScaleView;
