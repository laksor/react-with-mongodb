import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const userDelete = id =>{
      const proceed = window.confirm('are you sure u want to delete');
    if(proceed){
        const url =`http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        })
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <p key={user._id}>
            name: {user.name}  email: {user.email}
            <button onClick={() => userDelete(user._id)} style={{cursor:'pointer'}}>x</button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Home;
