import React, { useState } from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

const AddExpenseForm = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');



  const validateAndSubmit = () => {
    if (!expenseName || !amount  || !date) {
      setError('All fields are required!');
    } else {
      setError('');
      console.log({ expenseName, amount, date });
      setExpenseName('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Expense Name"
        value={expenseName}
        onChangeText={setExpenseName}
        mode="outlined"
        style={styles.input}
        placeholder="Enter expense name"
      />

      <TextInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter amount"
      />

      <TextInput
        label="Date"
        value={date}
        onChangeText={setDate}
        mode="outlined"
        placeholder="YYYY-MM-DD"
        style={styles.input}
      />

      {error ? <HelperText type="error">{error}</HelperText> : null}

      <Button mode="contained" onPress={validateAndSubmit} style={styles.button}>
        Add Expense
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default AddExpenseForm;
