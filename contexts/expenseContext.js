import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const DUMMY_EXPENSES = [
  {
    id: 1,
    description: "Pair of shoes",
    amount: 39.99,
    date: new Date("2024-10-1"),
  },
  {
    id: 2,
    description: "Jacket",
    amount: 59.99,
    date: new Date("2024-8-1"),
  },
  {
    id: 3,
    description: "Apple",
    amount: 1.99,
    date: new Date("2024-8-7"),
  },
  {
    id: 5,
    description: "Watch",
    amount: 39.99,
    date: new Date("2024-2-12"),
  },
];

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedItem = {
        ...state[updateableExpenseIndex],
        ...action.payload.data,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
};

const ExpenseProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (expenseID) => {
    dispatch({ type: "DELETE", payload: expenseID });
  };

  const updateExpense = (expenseID, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: expenseID, data: expenseData } });
  };

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseProvider;
