import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as language } from './language';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    language,
  });
