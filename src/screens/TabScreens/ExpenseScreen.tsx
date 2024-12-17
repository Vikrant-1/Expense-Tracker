import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {hasExpenseSelector} from '../../store/selectors/expenseSelector';
import {EmptyScreenView} from '../../components/common/EmptyView';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../constants/routes';

const ExpenseScreen = () => {
  const hasExpenses = useSelector(hasExpenseSelector);
  const navigation = useNavigation();

  if (!hasExpenses) {
    return (
      <EmptyScreenView
      title="Track Your Expenses"
      icon="receipt" // Change icon as needed
      description="You haven’t added any expenses yet. Start by adding your first expense."
      actionTitle="Add Expense"
      action={() => navigation.navigate(routes.addexpense)} 
      />
    );
  }
  return (
    <View>
      <Text>ExpenseScreen</Text>
    </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({});
