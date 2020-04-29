import firebase from "../../firebase";

const {
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
} = firebase.auth;

const available_auth_methods = {
  GITHUB: new GithubAuthProvider(),
  GOOGLE: new GoogleAuthProvider(),
  MICROSOFT: new OAuthProvider("microsoft.com"),
  TWITTER: new TwitterAuthProvider(),
};

export { available_auth_methods };
