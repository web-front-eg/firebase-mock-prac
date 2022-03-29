import { initializeApp } from "firebase/app";
import { envMap } from "../env";

const firebaseConfig = {
  apiKey: envMap.get("apiKey"),
  authDomain: envMap.get("authDomain"),
  projectId: envMap.get("projectId"),
  // storageBucket: envMap.get('storageBucket'),
  // messagingSenderId: envMap.get('messagingSenderId'),
  appId: envMap.get("appId"),
  //   measurementId: envMap.get("measurementId"),
};

export const app = initializeApp(firebaseConfig);
console.log(app);
