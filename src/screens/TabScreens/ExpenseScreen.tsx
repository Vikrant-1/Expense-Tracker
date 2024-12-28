import {FlatList, SectionList, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {
  getAllExpenseSelector,
  hasExpenseSelector,
} from '../../store/selectors/expenseSelector';
import {EmptyScreenView} from '../../components/common/EmptyView';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../constants/routes';
import ExpenseFilterView from '../../components/ExpenseComponents/ExpenseFilterView';
import {groupExpensesByMonth} from '../../utils/expense';
import ExpenseTile from '../../components/ExpenseComponents/ExpenseTile';
import ExpenseMonthHeader from '../../components/ExpenseComponents/ExpenseMonthHeader';

const ExpenseScreen = () => {
  const navigation = useNavigation();
  const hasExpenses = useSelector(hasExpenseSelector);
  const expenses = useSelector(getAllExpenseSelector);
  const sectionData = useMemo(() => {
    return groupExpensesByMonth(expenses);
  }, [expenses]);
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

  const formattedExpenseDates = expenses.map((expense) => {
    const date = new Date(expense.expenseDate * 1000); // Convert from seconds to milliseconds
    return date.toLocaleDateString(); // Format as locale-specific date string
  });

  return (
    <View style={{flex: 1}}>
      <ExpenseFilterView />

      <SectionList
        sections={sectionData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ExpenseTile expense={item} />}
        renderSectionHeader={({section: {title, amount}}) => (
          <ExpenseMonthHeader date={title} amount={amount} />
        )}
      />
    </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({});

// create a add expense api
// Complete full add expense
// 1. Date picker
// 2. Category picker
// 3. Category apis
// 4. Default categories in global
// 5. check ui in dribble
// 6. hit api
// create a expense full screen -> check for Phone pe , google pay , dribble design or ask bolt.
// 1. Serach ui
// 2. filter and sort ui
// 3. Total expense by month

// complete by 18 dec 2024.
// frontend and backend
// 40% should complete in morning
// category -> add edit and delete
// expense -> add edit and delete
