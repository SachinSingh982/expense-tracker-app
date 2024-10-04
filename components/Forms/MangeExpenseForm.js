import { StyleSheet, View, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

const ManageExpenseForm = ({
  onCancel,
  isEditing,
  onSubmit,
  selectedExpense,
}) => {
  const [inputValue, setInputValue] = useState({
    amount: selectedExpense?.amount?.toString() || "",
    description: selectedExpense?.description || "",
    date: selectedExpense?.date?.toISOString().slice(0, 10) || "",
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() === "Invalid Date";
    const descIsValid = expenseData.description.trim().length > 0;

    if (amountIsValid || dateIsValid || descIsValid) {
      Alert.alert("Invalid Input", "Please Check Your Input Value");
      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputValue.amount,
            onChangeText: inputChangeHandler.bind(this, "amount"),
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValue.date,
            onChangeText: inputChangeHandler.bind(this, "date"),
          }}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          value: inputValue.description,
          onChangeText: inputChangeHandler.bind(this, "description"),
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>

        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ManageExpenseForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  form: { marginTop: 40 },
  inputRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: { flex: 1 },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
