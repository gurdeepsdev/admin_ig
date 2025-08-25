import React, { useState } from "react";
import LoginPage from "./Home";
import AdminDashboard from "./Dashboard";

<<<<<<< HEAD
function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
=======
export default function App() {
  return (
  <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alloffers" element={<Offers />} />
>>>>>>> 2388469cc4e9b69dae72e00f771295591eec4d75

  return loggedIn ? <AdminDashboard /> : <LoginPage onLogin={() => setLoggedIn(true)} />;
}

export default App;
