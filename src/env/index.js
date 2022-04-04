export const envMap = new Map();

// eslint-disable-next-line no-undef
const env = process.env;
if (!env) {
  throw new Error('fail to init dotenv!');
}

envMap.set('apiKey', env.REACT_APP_API_KEY);
envMap.set('authDomain', env.REACT_APP_AUTH_DOMAIN);
envMap.set('projectId', env.REACT_APP_PROJECT_ID);
envMap.set('storageBucket', env.REACT_APP_STORAGE_BUCKET);
envMap.set('messagingSenderId', env.REACT_APP_MESSAGING_SENDER_ID);
envMap.set('appId', env.REACT_APP_APP_ID);
envMap.set('measurementId', env.REACT_APP_MEASUREMENT_ID);
envMap.set('baseurl', env.REACT_APP_BASE_URL);
