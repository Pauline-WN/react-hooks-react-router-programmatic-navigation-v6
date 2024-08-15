import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <NavBar logout={logout} />
          <Outlet context={login} />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default App;
