import axios from "axios";

export const axi = axios.create({
  baseURL: "http://localhost:3001",
});

export function setHeaderProp(key, val) {
  if (typeof val !== "string") {
    throw new Error("val must be string");
  }
  axi.data.headers.set(key, val);
}

export function delHeaderProp(key) {
  if (typeof key !== "string") {
    throw new Error("key must be string");
  }
  console.log(axi);

  if (!axi.data.headers(key)) {
    return;
  }

  axi.data.headers[key] = undefined;
}
