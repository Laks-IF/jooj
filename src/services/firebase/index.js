import { available_auth_methods } from "./providers";

import requests from "./requests";

export default {
  available_auth_methods,
  ...requests,
};
