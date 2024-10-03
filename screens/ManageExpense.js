import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../contexts/expenseContext";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expenseCTX = useContext(ExpensesContext);
  const deletExpenses = expenseCTX?.deleteExpense || null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  // Handle on delete
  const handleOnDeleteExpense = (id) => {
    deletExpenses(editedExpenseId);
    navigation.goBack();
  };

  const handleOnCancel = () => {
    navigation.goBack();
  };

  const handleOnConfitExpense = () => {
    if (isEditing) {
      expenseCTX.updateExpense(editedExpenseId, {
        description: "Text",
        amount: 23.99,
        date: new Date("2023-03-1"),
      });
    } else {
      expenseCTX.addExpense({
        description: "Text",
        amount: 23.99,
        date: new Date("2023-03-1"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={handleOnCancel}>
          Cancel
        </Button>

        <Button style={styles.button} onPress={handleOnConfitExpense}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContaienr}>
          <IconButton
            iconName="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={handleOnDeleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteContaienr: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
