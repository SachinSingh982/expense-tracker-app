import { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpensesContext } from "../contexts/expenseContext";
import { getDateMinusDays } from "../utils";

const RecentExpense = () => {
  const expenseCTX = useContext(ExpensesContext);

  const expenses = expenseCTX?.expenses || [];

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7daysAgo && expense.date <= today;
  });

  return (
    <>
      <ExpenseOutput
        fallBackText={"No Expenses Registers for the Last 7 days"}
        expenses={recentExpenses}
        expensePeriod={"Last 7 days"}
      />
    </>
  );
};

export default RecentExpense;
