import {Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import ContactTag from './ContactTag';
import useContactsPermission from '../../hooks/useContactsPermission';


interface ContactHeaderProps {
  selectedContacts: string[];
  removeContact: (recordId: string) => void;
}

const ContactHeader = ({selectedContacts,removeContact}: ContactHeaderProps) => {
  const { contacts } = useContactsPermission();
  return (
    <View>
      <Animated.FlatList
        data={selectedContacts}
        horizontal
        keyExtractor={(item)=>item}
        renderItem={({item}) => {
          const contact = contacts.find(_c => _c.recordId === item);
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
              isSelected={contact.recordId === item}
              removeContact={removeContact}
            />
          );
        }}
      />
    </View>
  );
};

export default ContactHeader;
