import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, Avatar, useTheme} from 'react-native-paper';
import {ExpenseInterface} from '../../types/expenseTypes';

interface ExpenseTileProps {
  expense: ExpenseInterface;
}

const ExpenseTile = ({expense}: ExpenseTileProps) => {
  const theme = useTheme();

  // add name , amount ,  date  and category
  // date -> updatedBy -> updatedAt if it is there otherwise createdAt
  return (
    <Card style={styles.card}>
      <Card.Title
        title={expense.name}
        subtitle={expense.category}
      />
      <Card.Content>
        <Text style={styles.amount}>₹ {expense.amount}</Text>
        <Text style={styles.description}>{expense.description}</Text>
        <Text style={styles.date}>
          {expense.updatedBy?.updatedAt || expense.createdBy.createdAt}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
        color: 'grey',
    },
});

export default ExpenseTile;
