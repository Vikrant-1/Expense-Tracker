import {get} from 'lodash';
import {RootState} from '../store';

export const hasExpenseSelector = (state: RootState) => {
  const expenses = get(state, 'expenseState.expenses', []);
  return expenses && expenses.length > 0;
};

export const getExpenseByIdSelector =
  (state: RootState) => (expenseId: string) => {
    const expenses = get(state, 'expenseState.expenses', []);
    const expense = expenses.find(item => item.id === expenseId);
    if (!expense) {
      return null;
    }
    return expense;
  };

export const getAllExpenseSelector = (state: RootState) => {
  return get(state, 'expenseState.expenses', []);
};




