import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expense = [
    { title: "Car Insurance", amount: 244.67, date: new Date(2022, 4, 28) },
    { title: "Home Insurance", amount: 214.67, date: new Date(2019, 7, 28) },
    { title: "Fire Insurance", amount: 194.67, date: new Date(2005, 10, 28) },
  ];

  const addExpenseHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expense} />
    </div>
  );
};

export default App;
