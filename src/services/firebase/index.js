import { authProviders } from "./providers";
import { resources } from "./resources";

import { auth, firestore } from "./requests";

export { authProviders, resources };

const services = {
  auth,
  firestore,
};

export default services;
