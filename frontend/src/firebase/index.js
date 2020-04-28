import sdk from 'firebase';

import config from './config';

const firebase = sdk.initializeApp(config);
const db = sdk.database();

sdk.analytics();

export { db };

export default firebase;
