import { View, StyleSheet, Dimensions } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

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

const ExpenseOutput = ({ expenses = DUMMY_EXPENSES, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: "100%",
    paddingVertical: 16,
    backgroundColor: GlobalStyles.colors.primary50,
    maxWidth: 600,
    alignSelf: "center",
    borderRadius: 12,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray700,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
});
