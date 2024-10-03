import { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpensesContext } from "../contexts/expenseContext";

const AllExpense = () => {
  const expenseCTX = useContext(ExpensesContext);

  const expenses = expenseCTX?.expenses || [];

  return (
    <>
      <ExpenseOutput
        fallBackText={"No Registered Expense Found"}
        expenses={expenses}
        expensePeriod={"Total"}
      />
    </>
  );
};

export default AllExpense;
