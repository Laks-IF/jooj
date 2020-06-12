export const authDefault = {
  auth: {
    isAuth: null,
    user: {},
  },
};

export const SET_USER = "SET_USER";

export function setUserAction(data) {
  return {
    type: SET_USER,
    payload: {
      data,
    },
  };
}

export default function authReducer(state = authDefault, action) {
  const types = {
    [SET_USER]: () => ({
      auth: {
        ...state.auth,
        isAuth: action.payload.data.isAuth,
        user: action.payload.data.user || {},
      },
    }),
  };

  const getNewState = types[action.type] || (() => state);

  return getNewState();
}
