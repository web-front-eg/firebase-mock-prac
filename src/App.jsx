import { useContext } from "react";
import {
  GET_getCommentById,
  GET_getPostById,
  GET_getProfileByName,
} from "./api/mock/mock.service";
import "./App.css";
import { loginAsync, logoutAsync } from "./fb/auth";
import { AuthCtx } from "./fb/auth/auth.provider";

GET_getPostById(1).then(console.log);
GET_getCommentById(1).then(console.log);
GET_getProfileByName("typicode").then(console.log);

function App() {
  const { user } = useContext(AuthCtx);
  const loginButton = <button onClick={loginAsync}>Login</button>;
  const logoutButton = <button onClick={logoutAsync}>Logout</button>;
  return <div className="App">{!user ? loginButton : logoutButton}</div>;
}

export default App;
