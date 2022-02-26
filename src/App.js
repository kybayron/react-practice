import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id:"0.23", title: "Car Insurance", amount: 244.67, date: new Date(2022, 4, 28) },
  { id:"0.24", title: "Home Insurance", amount: 214.67, date: new Date(2019, 7, 28) },
  { id:"0.25", title: "Fire Insurance", amount: 194.67, date: new Date(2005, 10, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
