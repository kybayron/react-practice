import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [expenseTitle,setTitle] = useState(props.title);

  const expenseAmount = props.amount;

  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
