// ====================
// LIBRARY IMPORTS
// ====================
import { FaTwitter, FaGoogle, FaGithub, FaMicrosoft } from "react-icons/fa";

// ========================================
// FIREBASE SERVICE
// ========================================
import firebase_service from "../../services/firebase";

// ========================================
// ALL AVAILABLE METHODS
// ========================================
const methods = {
  google: {
    provider: firebase_service.available_auth_methods.GOOGLE,
    color: "#DD4B39",
    icon: FaGoogle,
  },
  github: {
    provider: firebase_service.available_auth_methods.GITHUB,
    color: "#000000",
    icon: FaGithub,
  },
  twitter: {
    provider: firebase_service.available_auth_methods.TWITTER,
    color: "#1C9CEA",
    icon: FaTwitter,
  },
  microsoft: {
    provider: firebase_service.available_auth_methods.MICROSOFT,
    color: "#8646F2",
    icon: FaMicrosoft,
  },
};

export default methods;
