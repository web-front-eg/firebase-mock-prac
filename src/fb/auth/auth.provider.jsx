import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const initialState = {};

export const AuthCtx = createContext(initialState);
AuthCtx.displayName = 'Authorization Context';

export function AuthCtxProvider({ children }) {
  const [authInfo, setAuthInfo] = useState(null);

  return (
    <AuthCtx.Provider value={{ authInfo, setAuthInfo }}>
      {children}
    </AuthCtx.Provider>
  );
}

AuthCtxProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};
