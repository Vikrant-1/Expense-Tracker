import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {THEME} from '../../constants/colors';
import {ContactProps} from '../../hooks/useContactsPermission';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


interface ContactTagProps extends ContactProps {
    isSelected: boolean;
}

const ContactTag = ({
  hasThumbnail,
  thumbnailPath,
  displayName,
  phoneNumber,
    recordId,
  isSelected
}: ContactTagProps) => {

    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);


    useEffect(() => {
        if (isSelected) {
            scale.value = withSpring(1,{damping:15,})

        } else {
            
        }

    }, [isSelected]);



  return (
    <Animated.View style={[styles.tag,]}>
      {hasThumbnail ? (
        <Image style={styles.avatar} source={{uri: thumbnailPath}} />
      ) : (
        <Icon size={30} name="people" style={styles.defaultAvatar} />
      )}
      <Text style={styles.name}>{displayName || phoneNumber}</Text>
    </Animated.View>
  );
};

export default ContactTag;

const styles = StyleSheet.create({
  tag: {
    alignItems: 'center',
    backgroundColor: 'red',
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  defaultAvatar: {
    backgroundColor: THEME.ash_gray[900],
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: THEME.ash_gray[300],
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: THEME.dark_cyan[300],
  },
});
