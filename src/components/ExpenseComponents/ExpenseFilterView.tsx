import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Chip} from 'react-native-paper';

interface HeaderProps {
  id: string;
  title: string;
  action: () => void;
}

const ExpenseFilterView = () => {
  const data: HeaderProps[] = [
    {
      id: 'category',
      title: 'Category',
      action: () => console.log('Category'),
    },
    {
      id: 'amount',
      title: 'Amount',
      action: () => console.log('Amount'),
    },
    {
      id: 'paymentmode',
      title: 'Payment Mode',
      action: () => console.log('Payment Mode'),
    },
    {
      id: 'date',
      title: 'Date',
      action: () => console.log('Date'),
    },
    {
      id: 'split',
      title: 'Split',
      action: () => console.log('Split'),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => (
          <Chip style={styles.chip} key={item.id} onPress={item.action}>
            {item.title}
          </Chip>
        )}
      />
    </View>
  );
};

export default ExpenseFilterView;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  list: {},
  listContent: {
    gap: 10,
    paddingEnd: 20,
    paddingStart: 10,
  },
  chip: {},
});
