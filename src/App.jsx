import React, { useState } from "react";
import LoginPage from "./LoginPage";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return loggedIn ? <AdminDashboard /> : <LoginPage onLogin={() => setLoggedIn(true)} />;
}

export default App;
