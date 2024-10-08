import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpense from "../screens/RecentExpense";
import AllExpense from "../screens/AllExpense";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <>
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              iconName={"add"}
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
        })}
      >
        <BottomTabs.Screen
          name="RecentExpense"
          component={RecentExpense}
          options={{
            title: "Recent Expense",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="AllExpense"
          component={AllExpense}
          options={{
            title: "All Expense",
            tabBarLabel: "All Expense",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </>
  );
};

export default ExpenseOverview;
