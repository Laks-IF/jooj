export default function middleware(action) {
  function effect(dispatch) {
    // When User Logout, Set Dispatch Other States Here
    dispatch(action);
  }

  return effect;
}
