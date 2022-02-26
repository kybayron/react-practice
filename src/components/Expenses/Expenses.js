import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
const Expense = (props) => {
  const [filteredYear, selectFilteredYear] = useState("2020");
  const onFilterDate = (selectedDate) => {
    selectFilteredYear(selectedDate);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectDate={onFilterDate} />
        <ExpensesList filteredYear={filteredYear} expense={props.expense}/>
      </Card>
    </div>
  );
};

export default Expense;
