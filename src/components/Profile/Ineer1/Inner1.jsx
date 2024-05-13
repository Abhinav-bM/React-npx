import React, { useContext } from "react";
import UserContex from "../../../context/UserContex";

export default function Inner1() {

  const { user } = useContext(UserContex);

  return (
    <div>
      <h1>{user.password}</h1>
    </div>
  );
}
