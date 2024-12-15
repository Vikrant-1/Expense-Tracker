import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ContactProps} from '../../hooks/useContactsPermission';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {THEME, WHITE} from '../../constants/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {DynamicStyleSheet, useDynamicStyleSheet} from 'react-native-dynamic';

interface ContactTileProps extends ContactProps {
  isSelected: boolean;
  onPress: (recordId: string) => void;
}

const ContactTile = ({
  displayName,
  phoneNumber,
  hasThumbnail,
  thumbnailPath,
  recordId,
  isSelected,
  onPress,
}: ContactTileProps) => {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (isSelected) {
      opacity.value = withTiming(1, {duration: 200});
      scale.value = withSpring(1, {damping: 10, stiffness: 150});
    } else {
      opacity.value = withTiming(0);
      scale.value = withSpring(0, {damping: 10, stiffness: 150});
    }
  }, [isSelected, opacity, scale]);

  const checkIconStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: opacity.value,
    };
  });

  return (
    <Pressable key={recordId} onPress={() => onPress(recordId)}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {hasThumbnail ? (
            <Image style={styles.avatar} source={{uri: thumbnailPath}} />
          ) : (
            <Icon size={30} name="people" style={styles.defaultAvatar} />
          )}
          <Animated.View style={[checkIconStyles, styles.checkIcon]}>
            <Icon
              style={styles.icon}
              size={20}
              color={'green'}
              name="check-circle"
            />
          </Animated.View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{displayName}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ContactTile;

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingVertical: 12,
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  defaultAvatar: {
    backgroundColor: THEME.background.DEFAULT,
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: THEME.text.primary,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.text.primary,
  },
  phoneNumber: {
    fontSize: 14,
    color: THEME.text.primary,

    marginTop: 2,
  },
  checkIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
