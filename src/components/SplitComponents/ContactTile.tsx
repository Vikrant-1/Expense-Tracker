import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScaleView from '../touchablesComp/ScaleView';
import {ContactProps} from '../../hooks/useContactsPermission';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {THEME, WHITE} from '../../constants/colors';

const ContactTile = ({
  displayName,
  phoneNumber,
  hasThumbnail,
  thumbnailPath,
  recordId,
}: ContactProps) => {
  return (
    <ScaleView key={recordId} onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {hasThumbnail ? (
            <Image style={styles.avatar} source={{uri: thumbnailPath}} />
          ) : (
            <Icon size={30} name="people" style={styles.defaultAvatar} />
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{displayName}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
      </View>
    </ScaleView>
  );
};

export default ContactTile;

const styles = StyleSheet.create({
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
    backgroundColor: THEME.ash_gray[900],
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: THEME.ash_gray[300],
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.dark_cyan[300],
  },
  phoneNumber: {
    fontSize: 14,
    color: THEME.dark_cyan[200],
    marginTop: 2,
  },
});
