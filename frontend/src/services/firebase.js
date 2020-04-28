import { db } from '../utils/firebaseUtils';

const getDataList = (nodePath, callback, size = 10) => {
  let query = db.ref(nodePath).limitToLast(size);

  query.on('value', (dataSnapshot) => {
    let items = [];
    dataSnapshot.forEach((childSnapshot) => {
      let item = childSnapshot.val();
      item['key'] = childSnapshot.key;
      items.push(item);
    });
    callback(items);
  });

  return query;
};

export default {
  getDataList,
};
