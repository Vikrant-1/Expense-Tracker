import {Image, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {THEME} from '../../constants/colors';
import {ContactProps} from '../../hooks/useContactsPermission';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { DynamicStyleSheet, useDynamicStyleSheet } from 'react-native-dynamic';

interface ContactTagProps extends ContactProps {
  isSelected: boolean;
  removeContact: (recordId: string) => void;
}

const ContactTag = ({
  hasThumbnail,
  thumbnailPath,
  displayName,
  phoneNumber,
  recordId,
  isSelected,
  removeContact,
}: ContactTagProps) => {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (isSelected) {
      opacity.value = withTiming(1, {duration: 500});
      scale.value = withSpring(1, {damping: 17, stiffness: 150});
    } else {
      opacity.value = withTiming(0, {duration: 500});
      scale.value = withSpring(0, {damping: 17, stiffness: 150});
    }
  }, [isSelected, scale, opacity, recordId, removeContact]);

  const animtedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{scale: scale.value}],
    };
  });

  return (
    <Animated.View key={recordId} style={[styles.tag, animtedStyles]}>
      {hasThumbnail ? (
        <Image style={styles.avatar} source={{uri: thumbnailPath}} />
      ) : (
        <Icon size={30} name="people" style={styles.defaultAvatar} />
      )}
      <Text style={styles.name}>{displayName || phoneNumber}</Text>
      <Icon
        onPress={() => removeContact(recordId)}
        style={styles.icon}
        size={25}
        color={'gray'}
        name="cancel"
      />
    </Animated.View>
  );
};

export default ContactTag;

const dynamicStyles = new DynamicStyleSheet({
  tag: {
    alignItems: 'center',
    marginRight: 30,
    position: 'relative',
    paddingVertical: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  defaultAvatar: {
    backgroundColor: THEME.background.DEFAULT,
    width: 70,
    height: 70,
    borderRadius: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: THEME.text.primary,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: THEME.text.primary,
    marginTop: 7,
  },
  icon: {
    width: 27,
    position: 'absolute',
    right: -5,
  },
});