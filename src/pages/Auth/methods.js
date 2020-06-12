// ====================
// LIBRARY IMPORTS
// ====================
import { FaTwitter, FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

// ========================================
// FIREBASE SERVICE
// ========================================
import { authProviders } from "../../services/firebase";

// ========================================
// ALL AVAILABLE METHODS
// ========================================
const methods = {
  google: {
    provider: authProviders.GOOGLE,
    color: "#DD4B39",
    Icon: FaGoogle,
  },
  github: {
    provider: authProviders.GITHUB,
    color: "#000000",
    Icon: FaGithub,
  },
  twitter: {
    provider: authProviders.TWITTER,
    color: "#1C9CEA",
    Icon: FaTwitter,
  },
  microsoft: {
    provider: authProviders.MICROSOFT,
    color: "#8646F2",
    Icon: FaMicrosoft,
  },
};

export default methods;
