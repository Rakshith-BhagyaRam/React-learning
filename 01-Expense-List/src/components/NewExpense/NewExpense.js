import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpenseCard(false);
  };

  //---:
  //---:

  const [expenseCard, setExpenseCard] = useState(false);

  const addNewExpenseButtonHandler = () => setExpenseCard(true);
  const cancelButtonHandler = () => setExpenseCard(false);

  return (
    <div className="new-expense">
      {!expenseCard ? (
        <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
}
