import React, { useState } from "react";
import Login from "./pages/Login.jsx";
import LMSDashboard from "./pages/LMSDashboard.jsx";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LMSDashboard logoutUser={logoutUser} />
      ) : (
        <Login loginUser={loginUser} />
      )}
    </div>
  );
}

export default App;
