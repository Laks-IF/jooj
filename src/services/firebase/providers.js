import firebase from "../../config/firebase";

const {
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
} = firebase.auth;

const authProviders = {
  GITHUB: new GithubAuthProvider(),
  GOOGLE: new GoogleAuthProvider(),
  MICROSOFT: new OAuthProvider("microsoft.com"),
  TWITTER: new TwitterAuthProvider(),
};

export { authProviders };
