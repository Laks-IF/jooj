import { available_auth_methods } from "./providers";
import { available_resources } from "./resources";

import requests from "./requests";

export default {
  available_auth_methods,
  available_resources,
  ...requests,
};
