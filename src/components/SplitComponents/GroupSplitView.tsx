import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WHITE} from '../../constants/colors';
import { faker} from '@faker-js/faker';


// 1. Role tag at right
// 2. Last activity
// 3. name
// 4. description -> 150 words max


// GroupDetail Screen
// card for detail
// group setting screen


const GroupSplitView = () => {
  const data = {
    members: [1, 1, 1, 1, 1, 1, 1, 1].map(() => ({
      avatar: faker.image.avatarGitHub(),
      id: faker.phone.number(),
      name: faker.person.fullName(),
      role: 'admin',
    })),
    name: faker.company.name(),
    lastActivity: Date.now(),
  };

  return (
    <View style={styles.card}>
      <View style={styles.topView}>
        <View style={styles.membersView}>
          {data.members.map(item => (
            <Image
              key={item.id}
              width={30}
              height={30}
              style={[styles.image]}
              source={{uri: item.avatar}}
            />
          ))}
          <Text style={styles.moreText}>+ 5 more</Text>
        </View>
      </View>
    </View>
  );
};

export default GroupSplitView;

const styles = StyleSheet.create({
  card: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 4,
  },
  topView: {
    flexDirection: 'row',
  },

  membersView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: -10,
  },
  moreText: {
    color: 'blue',
    fontSize: 14,
    marginLeft: 20,
  },
});
