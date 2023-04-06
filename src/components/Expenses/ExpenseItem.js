import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle = "Updated"] = useState(props.title);
  console.log("ExpenseItem is evaluated by react");
  // title = props.title;

  const clickhandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>

      <button onClick={clickhandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
