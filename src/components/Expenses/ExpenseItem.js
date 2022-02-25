import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
