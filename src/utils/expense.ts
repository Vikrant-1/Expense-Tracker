import {format, startOfMonth} from 'date-fns';
import {ExpenseInterface} from '../types/expenseTypes';

type Section = {
  title: string;
  amount: number;
  monthStartDate: number;
  data: ExpenseInterface[];
};

function groupExpensesByMonth(expenses: ExpenseInterface[]): Section[] {
  const grouped: {[key: string]: Section} = {};

  for (const expense of expenses) {
    // Convert expenseDate (assuming it's in seconds) to a JavaScript Date object
    const date = new Date(expense.expenseDate * 1000);
    const year = date.getFullYear();
    const month = date.getMonth();

    // Create a unique key for each month
    const monthKey = `${year}-${month}`;

    // Initialize the section if not already created
    if (!grouped[monthKey]) {
      const monthStartDate = new Date(year, month, 1); // First day of the month
      grouped[monthKey] = {
        title: monthStartDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        }),
        amount: 0,
        monthStartDate: startOfMonth(expense.expenseDate, {}).getMilliseconds(),
        data: [],
      };
    }

    // Add the expense to the section
    grouped[monthKey].data.push(expense);

    // Add the amount to the total for the month
    grouped[monthKey].amount += expense.amount;
  }

  // Convert the grouped object into an array and sort by month start date
  return Object.values(grouped).sort(
    (a, b) => a.monthStartDate - b.monthStartDate,
  );
}

export {groupExpensesByMonth};
