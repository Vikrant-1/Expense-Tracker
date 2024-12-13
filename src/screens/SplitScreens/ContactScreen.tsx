import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import useContactsPermission from '../../hooks/useContactsPermission';
import useLoader from '../../hooks/useLoader';
import ContactTile from '../../components/SplitComponents/ContactTile';
import {WHITE} from '../../constants/colors';
import ContactHeader from '../../components/SplitComponents/ContactHeader';

// need to add a tile and pick a contacts view
// we can keep max as 10 or 20 may be
// keep tile may be same as settings
const ContactListScreen = () => {
  const {hasPermission, contacts, loading, requestPermission} =
    useContactsPermission();
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission]);

  const onPress = (recordId: string) => {
    const hasRecord = selectedContacts.includes(recordId);

    if (hasRecord) {
      const data = selectedContacts.filter(item => item !== recordId);
      setSelectedContacts(data);
    } else {
      setSelectedContacts([...selectedContacts, recordId]);
    }
  };

  if (loading) {
    return <Text>need to add loader here </Text>;
  }

  if (!hasPermission) {
    return (
      <Text>No permission to access contacts. Please allow from settings.</Text>
    );
  }

  if (hasPermission === null) {
    return <Button title="Request Permission" onPress={requestPermission} />;
  }

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: WHITE}}>
      <ContactHeader selectedContacts={selectedContacts} />

      <FlatList
        data={contacts}
        keyExtractor={item => item.recordId}
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 18,
            }}>
            Contacts
          </Text>
        }
        renderItem={({item}) => {
          const isSelected = selectedContacts.includes(item.recordId);
          return (
            <ContactTile {...item} isSelected={isSelected} onPress={onPress} />
          );
        }}
      />
    </View>
  );
};

export default ContactListScreen;
