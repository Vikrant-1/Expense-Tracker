import {StyleSheet, Text} from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ContactTag from './ContactTag';
import useContactsPermission from '../../hooks/useContactsPermission';


interface ContactHeaderProps {
  selectedContacts: string[];
  removeContact: (recordId: string) => void;
}

const ContactHeader = ({selectedContacts,removeContact}: ContactHeaderProps) => {
  const { contacts } = useContactsPermission();
  const flatListTranslateY = useSharedValue(0);
  const opacity = useSharedValue(0);



  useEffect(() => {
    if (selectedContacts.length <= 0) {
      flatListTranslateY.value = withTiming(-100, { duration: 400 });
      opacity.value = withTiming(0, { duration: 300 });
    } else {
      flatListTranslateY.value = withTiming(0, { duration: 400 });
      opacity.value = withTiming(1, { duration: 300 });
    }
  }, [selectedContacts.length,flatListTranslateY,opacity]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: flatListTranslateY.value }],
      opacity:opacity.value,
    };
  });
  return (
    <Animated.View style={[animatedStyles , styles.container]} >
      <Text style={styles.title} >Selected Contacts</Text>
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
      {/* <Animated.View style={styles.seperator}/> */}
    </Animated.View  >
  );
};

export default ContactHeader;


const styles = StyleSheet.create({
  container: {
    transform: [{ translateY: -100 }],
    opacity:0,
  },
  title: {
    fontSize: 18,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
});
