import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = +entredAmount;

    // if (
    //   entredAmount.trim().length === 0 ||
    //   entredAmountNumber < 1 ||
    //   entredAmountNumber > 5
    // ) {
    //   return setAmountIsValid(false);
    // }

    props.onAddToCart(entredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          //   step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {/* {!amountIsValid && <p>please Enter a valid amount (1-5).</p>} */}
    </form>
  );
};

export default MealItemForm;
