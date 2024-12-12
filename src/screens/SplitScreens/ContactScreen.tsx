import React, {useEffect} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import useContactsPermission from '../../hooks/useContactsPermission';
import useLoader from '../../hooks/useLoader';
import ContactTile from '../../components/SplitComponents/ContactTile';
import { WHITE } from '../../constants/colors';

// need to add a tile and pick a contacts view
// we can keep max as 10 or 20 may be
// keep tile may be same as settings
const ContactListScreen = () => {
  const {hasPermission, contacts, loading, requestPermission} =
    useContactsPermission();

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission]);

  return (
    <View style={{flex: 1, padding: 10,backgroundColor:WHITE}}>
      {loading ? (
       <Text>need to add loader here </Text>
      ) : hasPermission ? (
        <FlatList
          data={contacts}
          keyExtractor={item => item.recordId}
          renderItem={({item}) => (
           <ContactTile {...item} />
          )}
        />
      ) : (
        <Text>No permission to access contacts. Please allow from settings.</Text>
      )}

      {hasPermission === null && (
        <Button title="Request Permission" onPress={requestPermission} />
      )}
    </View>
  );
};

export default ContactListScreen;
