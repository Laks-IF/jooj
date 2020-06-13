export const enterTeamDefault = {
  enterTeam: {
    form: {
      create: {
        name: "",
        password: "",
        createdAt: null,
      },
      join: {
        code: "",
        password: "",
      },
      directJoin: {
        code: "",
        password: "",
      },
    },
  },
};

export const SET_FORM = "SET_FORM";

export function setFormction(data) {
  return {
    type: SET_FORM,
    payload: {
      data,
    },
  };
}

export default function enterTeamReducer(state = enterTeamDefault, action) {
  const types = {
    [SET_FORM]: () => ({
      enterTeam: {
        ...state.enterTeam,
        form: action.payload.data,
      },
    }),
  };

  const getNewState = types[action.type] || (() => state);

  return getNewState();
}
