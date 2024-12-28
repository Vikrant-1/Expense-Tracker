import { format, startOfMonth } from 'date-fns';
import { ExpenseInterface } from '../types/expenseTypes';
import { values, sortBy } from 'lodash';
import { MMMM_yyyy } from '../constants/dateTime';

type Section = {
  title: string;
  amount: number;
  monthStartDate: Date;
  data: ExpenseInterface[];
};

function groupExpensesByMonth(expenses: ExpenseInterface[]): Section[] {
  const grouped: { [key: string]: Section } = {};

  for (const expense of expenses) {
    // Convert expenseDate (assuming it's in seconds) to a JavaScript Date object
    const date = new Date(expense.expenseDate * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    // Create a unique key for each month
    const monthKey = `${year}-${month}`;

    // Initialize the section if not already created
    if (!grouped[monthKey]) {
      const monthStartDate = new Date(year, month - 1, 1); // First day of the month
      grouped[monthKey] = {
        title:format(monthStartDate,MMMM_yyyy),
        amount: 0,
        monthStartDate: monthStartDate,
        data: [],
      };
    }

    // Add the expense to the section
    grouped[monthKey].data.push(expense);

    // Add the amount to the total for the month
    grouped[monthKey].amount += expense.amount;
  }

  // Sort the sections by monthStartDate in descending order
  const sortedSections = sortBy(values(grouped), [(section) => section.monthStartDate]).reverse();

  // Sort the expenses in each section by expenseDate in descending order
  sortedSections.forEach(section => {
    section.data = sortBy(section.data, [(expense) => new Date(expense.expenseDate * 1000)]).reverse();
  });

  return sortedSections;
}

export { groupExpensesByMonth };
