import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const updatedUser = {name, email};

    // post data to server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url , {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
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
      <h2> updating user : {user.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Update user</button>
      </form>
    </div>
  );
};

export default UpdateUser;
