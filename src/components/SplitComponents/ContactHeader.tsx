import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import ContactTag from './ContactTag';
import useContactsPermission from '../../hooks/useContactsPermission';

const ContactHeader = ({selectedContacts}: {selectedContacts: string[]}) => {
  const {contacts} = useContactsPermission();
  return (
    <View>
      <Animated.FlatList
        data={selectedContacts}
        horizontal
        renderItem={({item, index}) => {
          const contact = contacts.find(_c => _c.recordId == item);
          if (!contact) {
            return <Text>Malformed Contact</Text>;
          }
          return (
            <ContactTag
              key={item}
              recordId={item}
              hasThumbnail={contact?.hasThumbnail}
              thumbnailPath={contact?.thumbnailPath}
              displayName={contact?.displayName}
              phoneNumber={contact?.phoneNumber}
            />
          );
        }}
      />
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({});
