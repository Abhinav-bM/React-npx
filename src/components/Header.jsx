import React, { useState, useContext } from "react";
import UserContex from "../context/UserContex";

const Header = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContex);

  function HandleSubmit(e) {
    e.preventDefault();
    setUser({ name, password });
  }

  console.log("data :", name, password)

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={HandleSubmit}>Submit</button>
    </div>
  );
};

export default Header;
