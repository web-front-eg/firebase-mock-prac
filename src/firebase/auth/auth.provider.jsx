import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import constate from 'constate';

const initialState = {};

export const AuthCtx = createContext(initialState);
AuthCtx.displayName = 'Authorization Context';

export function AuthCtxProvider({ children }) {
  const [authInfo, setAuthInfo] = useState({
    user: null
  });

  return <AuthCtx.Provider value={{ authInfo, setAuthInfo }}>{children}</AuthCtx.Provider>;
}

AuthCtxProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};

// https://github.com/diegohaz/constate
// export const [AuthContextProvider, useGetAuthInfo, useSetAuthInfo] = constate(
//   () => {
//     const [authInfo, setAuthInfo] = useState({
//       user: null
//     });
//
//     return {
//       authInfo,
//       setAuthInfo
//     };
//   },
//   v => v.authInfo,
//   v => v.setAuthInfo
// );
