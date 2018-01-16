
import { put, takeEvery } from 'redux-saga/effects';

import Api from '../../app/Api';

import * as actions from './shops.actions';

export function* shopsAsync(action) {
  try {
    const shops = yield Api.get('shops');
    yield put(actions.fetchShopsSuccess(shops));
  } catch (e) {
    yield put(actions.fetchShopsError(e));
  }
}
/**
 *  Shops sagas
 */
export function* sagas() {
  yield takeEvery(actions.FETCH_SHOPS_ASYNC, shopsAsync);
}
