export const loaderDefault = {
  loader: {
    isLoading: false,
  },
};

export const SET_LOADER = "SET_LOADER";

export function setLoaderAction(data) {
  return {
    type: SET_LOADER,
    payload: {
      data,
    },
  };
}

export default function loaderReducer(state = loaderDefault, action) {
  const types = {
    [SET_LOADER]: () => ({
      loader: {
        ...state.loader,
        isLoading: action.payload.data.isLoading,
      },
    }),
  };

  const getNewState = types[action.type] || (() => state);

  return getNewState();
}
