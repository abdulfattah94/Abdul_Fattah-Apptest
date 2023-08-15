import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import { PING_INTERVAL } from '@configs/constants';

function* rootSagas() {
  yield all([
    fork(networkSaga, {
      pingInterval: PING_INTERVAL,
      pingServerUrl: 'https://www.google.co.id',
      pingInBackground: false,
    }),
  ]);
}

export default rootSagas;
