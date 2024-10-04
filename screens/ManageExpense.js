import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../contexts/expenseContext";
import MangeExpenseForm from "../components/Forms/MangeExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expenseCTX = useContext(ExpensesContext);
  const deletExpenses = expenseCTX?.deleteExpense || null;

  const selectedExpense = expenseCTX?.expenses.filter(
    (data) => data.id === editedExpenseId
  );

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

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expenseCTX.updateExpense(editedExpenseId, expenseData);
    } else {
      expenseCTX.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MangeExpenseForm
        onCancel={handleOnCancel}
        isEditing={isEditing}
        onSubmit={confirmHandler}
        selectedExpense={selectedExpense[0]}
      />

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

  deleteContaienr: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
