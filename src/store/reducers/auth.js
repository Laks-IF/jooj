export const authDefault = {
  auth: {
    isAuth: null,
    user: {
      createdAt: null,
      email: null,
      isLeader: null,
      name: null,
      photoURL: null,
      teamId: null,
      uid: null,
    },
  },
};

export const SET_USER = "SET_USER";

export function setUserAction(data) {
  console.log(data);
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
