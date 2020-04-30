export const authDefault = {
  auth: {
    isAuth: null,
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
          isAuth: action.payload.data.isAuth,
          user: action.payload.data.user || {},
        },
      };

    default:
      throw new Error(
        "Caro developer do futuro, tem algo errado nas actions types, por que esta que você está codando ainda não existe"
      );
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
