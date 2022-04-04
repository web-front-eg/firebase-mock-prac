import axios from 'axios';
import { envMap } from '../env';

const baseurl = envMap.get('baseurl') ?? 'http://localhost:3001';

export const axi = axios.create({
  baseURL: baseurl
});

export function setHeaderProp(key, val) {
  if (typeof val !== 'string') {
    throw new Error('val must be string');
  }
  axi.defaults.headers[key] = val;
  console.log('[setHeaderProp] after set!', key, axi.defaults);
}

export function delHeaderProp(key) {
  if (typeof key !== 'string') {
    throw new Error('key must be string');
  }

  axi.defaults.headers[key] = undefined;
  console.log('[setHeaderProp] after delete!', key, axi.defaults);
}

export default {
  get: axi.get,
  post: axi.post,
  put: axi.put,
  delete: axi.put,
  patch: axi.patch
};
