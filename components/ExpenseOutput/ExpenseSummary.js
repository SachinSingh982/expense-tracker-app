import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpenseSummary = ({ expenses, periodName }) => {
  // Function to calculate total Expense
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 16,
    borderRadius: 8,
    margin: 8,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray700,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  period: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary700,
    marginBottom: 8,
  },
  sum: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
