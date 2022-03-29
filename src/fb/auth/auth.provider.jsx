import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from ".";
import { axi, delHeaderProp } from "../../api/axios";

const initialState = {};

export const AuthCtx = createContext(initialState);
AuthCtx.displayName = "Authorization Context";

export function AuthCtxProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(async (ctx) => {
      if (!ctx) {
        console.log("no ctx!");
        delHeaderProp("Authorization");
        setUser(null);

        return;
      }

      console.log(ctx);

      const jwt = await ctx.getIdToken();
      console.log("jwt", jwt);

      if (!jwt) {
        throw new Error("jwt invallid!");
      }

      setUser(jwt);

      // setHeaderProp("Authorization", `Bearer ${jwt}`);
      await axi.get("user/me").then((err) => {
        throw err;
      });

      // console.log(signInResponse);
      // setUser(JSON.stringify(signInResponse));
    });

    return () => {
      if (subscriber) {
        subscriber();
      }
    };
  }, []);

  return (
    <AuthCtx.Provider value={{ user, setUser }}>{children}</AuthCtx.Provider>
  );
}

AuthCtxProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
