import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
const Expense = (props) => {
  const [filteredYear, selectFilteredYear] = useState("2020");
  const onFilterDate = (selectedDate) => {
    selectFilteredYear(selectedDate);
  };

  const filterExpense = (list) => {
    return list.filter( (item) => {
      return item.date.getFullYear().toString() === filteredYear;
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectDate={onFilterDate} />
        {filterExpense(props.expense).map((item) => (
          <ExpenseItem
            key={item.id }
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
