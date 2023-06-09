import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DummyExpenses = [
  {
    id: "e1",
    title: "Kesari",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Desk (Wooden) asdfghjklpoiuytrewqasdfghjkl",
    amount: 4501234567890987654321,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let's get started!"),
  //   React.createElement(Expenses, { items: expense })
  // );

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      {/* <p>i'm here </p> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
