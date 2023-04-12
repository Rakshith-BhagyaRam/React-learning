import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  /*

  for (let i = 0; i < props.length; i++) {
    <div className="expenses">
      <ExpenseItems
        id={props.items[i].id}
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i].date}
      />
    </div>;
  }

  */

  const [filteredYear, SetFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    SetFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (year) => year.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
