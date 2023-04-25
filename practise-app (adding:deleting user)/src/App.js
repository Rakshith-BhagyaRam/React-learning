import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const users = [
    { id: "usr1", name: "Rakshith", age: 22 },
    { id: "usr2", name: "Chaithra", age: 21 },
    { id: "usr3", name: "Kushal", age: 20 },
  ];
  const [usersList, setUsersList] = useState(users);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => [
      { name: uName, age: uAge, id: Math.random() },
      ...prevState,
    ]);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
