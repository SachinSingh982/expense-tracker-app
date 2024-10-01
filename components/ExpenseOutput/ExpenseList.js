import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (data) => {
  return (
    <>
      <ExpenseItem data={data.item} />
    </>
  );
};

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtracotr={({ item }) => {
          item.id;
        }}
      />
    </>
  );
};

export default ExpenseList;
