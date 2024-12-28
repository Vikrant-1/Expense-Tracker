import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {ExpenseInterface} from '../../types/expenseTypes';
import {getFormattedDate} from '../../utils/time';
import {dd_MMMM} from '../../constants/dateTime';

interface ExpenseTileProps {
  expense: ExpenseInterface;
}

const ExpenseTile = ({expense}: ExpenseTileProps) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={expense.name}
        right={props => (
          <Text style={styles.amount} {...props} variant="bodyMedium">
            ${expense.amount}
          </Text>
        )}
        subtitle={getFormattedDate(
          expense.updatedBy?.updatedAt ?? expense.createdBy.createdAt,
          dd_MMMM,
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 7,
  },
  description: {
    fontSize: 16,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
  },
});

export default ExpenseTile;
