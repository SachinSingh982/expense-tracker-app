import { View, StyleSheet, Text } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

const ExpenseOutput = ({ expenses, expensePeriod, fallBackText }) => {
  let content = <Text style={styles.fallBackText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      {content}
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
  fallBackText: {
    color: GlobalStyles.colors.primary400,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
