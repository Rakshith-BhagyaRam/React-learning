import ExpenseItems from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  // for (let i = 0; i < props.length; i++) {
  //   <div className="expenses">
  //     <ExpenseItems
  //       id={props.items[i].id}
  //       title={props.items[i].title}
  //       amount={props.items[i].amount}
  //       date={props.items[i].date}
  //     />
  //   </div>;
  // }

  return (
    <Card className="expenses">
      <ExpenseItems
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItems
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItems
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItems
        id={props.items[3].id}
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}
export default Expenses;
