import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {

  const expenseAmount = props.amount;


  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
    </li>
  );
};
export default ExpenseItem;
