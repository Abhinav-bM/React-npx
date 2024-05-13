import React from "react";
import Header from "./components/Header.jsx";
import UserContextProvider from "./context/UserContexProvider.jsx";
import Profile from "./components/Profile/Profile.jsx";

export default function App() {
  return (
    <UserContextProvider>
      <Header />
      <Profile />
    </UserContextProvider>
  );
}
