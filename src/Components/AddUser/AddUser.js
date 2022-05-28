import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name, email};

    // post data to server
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>PLease add a new user</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default AddUser;
