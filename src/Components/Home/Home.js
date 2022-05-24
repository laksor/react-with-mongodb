import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <p key={user._id}>
            name: {user.name} <br></br> email: {user.email}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Home;
