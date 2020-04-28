import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  setLang: ['newLang'],
});

export const LanguageTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  lang: 'en',
});

/* Reducers */

const getLanguageRequest = (state) =>
  state.merge({
    ...state,
    loading: true,
  });

const getLanguageSuccess = (state, { data }) =>
  state.merge({
    data,
    loading: false,
    error: false,
  });

const getLanguageFailure = (state) =>
  state.merge({
    ...state,
    error: true,
    loading: false,
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LANGUAGE_REQUEST]: getLanguageRequest,
  [Types.GET_LANGUAGE_SUCCESS]: getLanguageSuccess,
  [Types.GET_LANGUAGE_FAILURE]: getLanguageFailure,
});
