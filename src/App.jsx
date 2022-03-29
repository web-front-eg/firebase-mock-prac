import { useContext } from "react";
import "./App.css";
import { loginAsync, logoutAsync } from "./fb/auth";
import { AuthCtx } from "./fb/auth/auth.provider";

function App() {
  const { user } = useContext(AuthCtx);
  const loginButton = <button onClick={loginAsync}>Login</button>;
  const logoutButton = <button onClick={logoutAsync}>Logout</button>;
  return <div className="App">{!user ? loginButton : logoutButton}</div>;
}

export default App;
