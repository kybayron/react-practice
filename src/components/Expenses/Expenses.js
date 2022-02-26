import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
const Expense = (props) => {
  const [filteredYear, selectFilteredYear] = useState("2020");
  const onFilterDate = (selectedDate) => {
    selectFilteredYear(selectedDate);
  };

  const filterExpense = props.expense.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectDate={onFilterDate} />
        <ExpensesChart expense={filterExpense}/>
        <ExpensesList filteredYear={filteredYear} expense={filterExpense}/>
      </Card>
    </div>
  );
};

export default Expense;
