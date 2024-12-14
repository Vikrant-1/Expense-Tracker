import React, {useEffect, useState} from 'react';
import {Text, Button, View} from 'react-native';
import useContactsPermission from '../../hooks/useContactsPermission';
import ContactTile from '../../components/SplitComponents/ContactTile';
import {WHITE} from '../../constants/colors';
import ContactHeader from '../../components/SplitComponents/ContactHeader';
import {DynamicStyleSheet, useDynamicStyleSheet} from 'react-native-dynamic';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
// need to add a tile and pick a contacts view
// we can keep max as 10 or 20 may be
// keep tile may be same as settings
const ContactListScreen = () => {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const {hasPermission, contacts, loading, requestPermission} =
    useContactsPermission();
  const flatListTranslateY = useSharedValue(0);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  useEffect(() => {
    if (selectedContacts.length <= 0) {
      flatListTranslateY.value = withTiming(0, {duration: 400});
    } else {
      flatListTranslateY.value = withTiming(150, {duration: 400});
    }
  }, [selectedContacts.length, flatListTranslateY]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: flatListTranslateY.value}],
    };
  });

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
    <View style={[styles.container]}>
      <ContactHeader
        selectedContacts={selectedContacts}
        removeContact={onPress}
      />

      <Animated.FlatList
        data={contacts}
        style={[animatedStyles, styles.flatlist]}
        contentContainerStyle={styles.flatlistContent}
        keyExtractor={item => item.recordId}
        ListHeaderComponent={<Text style={styles.title}>Contacts</Text>}
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

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: WHITE,
  },
  title: {
    fontSize: 18,
  },
  flatlist: {
    position: 'absolute',
  },
  flatlistContent: {
    width:'100%',
    marginHorizontal: 10,
  },
});
