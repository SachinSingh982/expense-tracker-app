import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ data, id }) => {
  const { description, amount, date } = data;
  const navigation = useNavigation();

  const expensePresshandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePresshandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: GlobalStyles.colors.gray700,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  descriptionContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: GlobalStyles.colors.gray500,
  },
  amountContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
