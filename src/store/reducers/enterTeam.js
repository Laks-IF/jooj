export const enterTeamDefault = {
  enterTeam: {
    form: {
      create: {
        name: "",
        password: "",
      },
      join: {
        invite: "",
      },
    },
  },
};

export const SET_FORM = "SET_FORM";

export function setFormAction(data) {
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
