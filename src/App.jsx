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

  return (
    <div style={{ marginLeft: '5rem' }}>
      <Button
        onClick={() =>
          authInfo.user
            ? Auth.signOutAsync(setAuthInfo)
            : Auth.signInAsync(setAuthInfo)
        }
        text={authInfo.user ? 'Logout' : 'Login'}
      />
    </div>
  );
}

export default App;
