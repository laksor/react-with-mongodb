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
  return (
    <div>
      <h2> updating user: <br></br>name : {user.name} <br></br> email: {user.email}</h2>
    </div>
  );
};

export default UpdateUser;
