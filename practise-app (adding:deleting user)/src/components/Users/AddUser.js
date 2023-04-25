import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModel from "../UI/ErrorModel";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUsersAge = ageInputRef.current.value;

    if (
      enteredUsersAge.trim().length === 0 ||
      enteredName.trim().length === 0
    ) {
      setError({
        title: "Inappropriate Credentials",
        message: "Please Enter the Valid Username and Age",
      });
      return;
    }
    if (+enteredUsersAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please Enter the Valid Age (non Zero)",
      });
      return;
    }
    
    props.onAddUser(enteredName, enteredUsersAge);
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
  };

  const clearHandler = () => setError();

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          clear={clearHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label hrmlfor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label hrmlfor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
export default AddUser;
