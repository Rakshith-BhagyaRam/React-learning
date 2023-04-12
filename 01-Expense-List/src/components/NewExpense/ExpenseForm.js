import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");

  ////////////////////////------  Alternative  ------/////////////////
  //   let [enteredInput, setEnteredInput] = useState({
  //     enteredTitle: " ",
  //     enteredDate: " ",
  //     enteredAmount: " ",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // console.log(enteredTitle);

    // setEnteredInput({ ...enteredInput, enteredTitle: event.target.value });

    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // console.log(enteredAmount);

    // setEnteredInput({ ...enteredInput, enteredAmount: event.target.value });

    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // console.log(enteredDate);

    // setEnteredInput({ ...enteredInput, enteredDate: event.target.value });

    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submithandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(ExpenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle} // two way binding to reset / clear the input
            placeholder="ex., Apple"
          />
        </div>

        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} // two way binding to reset / clear the input
            onChange={amountChangeHandler}
            placeholder="ex., 100"
          />
        </div>

        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="01-01-2019"
            max="12-31-2022"
            value={enteredDate} // two way binding to reset / clear the input
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
}
