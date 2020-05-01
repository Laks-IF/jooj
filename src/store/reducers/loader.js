export const loaderDefault = {
  loader: {
    isLoading: false,
  },
};

export const SET_LOADER = "SET_LOADER";

const loaderReducer = (state = loaderDefault, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        loader: {
          ...state.loader,
          isLoading: action.payload.data.isLoading,
        },
      };

    default:
      return state;
  }
};

export const setLoaderAction = (data) => {
  return {
    type: SET_LOADER,
    payload: {
      data,
    },
  };
};

export default loaderReducer;
