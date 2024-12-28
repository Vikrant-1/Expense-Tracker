import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ExpenseMonthHeader = ({amount, date}: {amount: number; date: string}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseMonthHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
});
