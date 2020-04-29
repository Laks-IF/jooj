export const authDefault = {
  auth: {
    isLogged: null,
    user: {},
  },
};

export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";

const authReducer = (state = authDefault, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        auth: {
          ...state.auth,
          isLogged: action.payload.data.isLogged,
          user: action.payload.data.user,
        },
      };

    default:
      return state;
  }
};

export const setUserAction = (data) => {
  return {
    type: SET_USER,
    payload: {
      data,
    },
  };
};

export default authReducer;
