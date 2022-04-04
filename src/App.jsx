import { useContext } from 'react';
import Button from './component/layout/Button';
// import {
//   GET_getCommentById,
//   GET_getPostById,
//   GET_getProfileByName,
// } from "./api/mock/mock.service";
import Auth from './fb/auth';
import { AuthCtx } from './fb/auth/auth.provider';

// GET_getPostById(1).then(console.log);
// GET_getCommentById(1).then(console.log);
// GET_getProfileByName("typicode").then(console.log);

function App() {
  const { authInfo, setAuthInfo } = useContext(AuthCtx);

  console.log(authInfo);
  const AuthButtonJSX = authInfo.user ? (
    <Button onClick={() => Auth.signOutAsync(setAuthInfo)} text='Logout' />
  ) : (
    <Button onClick={() => Auth.signInAsync(setAuthInfo)} text='Login' />
  );

  return <div style={{ marginLeft: '5rem' }}>{AuthButtonJSX}</div>;
}

export default App;
