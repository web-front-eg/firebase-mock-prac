import { axi } from "../axios";

export async function GET_getPostById(id) {
  const response = await axi.get(`posts/${id}`);
  return response.data;
}

export async function GET_getCommentById(id) {
  const response = await axi.get(`comments/${id}`);
  return response.data;
}

export async function GET_getProfileByName(name) {
  if (typeof name !== "string") {
    throw new Error("name must be type of string");
  }

  const response = await axi.get(`profile`);
  return response.data;
}
