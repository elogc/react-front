import { put, takeEvery } from "redux-saga/effects";

import Api from "../../app/Api";

import * as actions from "./auth.actions";

/**
 *  Login the user the game using the token provided
 *  @param  {object}  action  Redux action
 */
export function* login(action) {
  const token = action.data;

  try {
    const response = yield Api.post("/login", { token });
    console.log(response);
    yield put(actions.finishLoginSuccess(gameToken));

    try {
      localStorage.setItem("token", gameToken.token);
    } catch (e) {
      // No empty block ;-)
    }
  } catch (e) {
    yield put(actions.finishLoginError(e));
  }
}

export function* registerAsync(action) {
  try {
    const response = yield Api.post("auth/register", action.data);
    console.log(response);
    yield put(actions.registerSuccess(response));
  } catch (e) {
    console.log("error", e);
    yield put(actions.registerError(e));
  }
}

/**
 *  Auth sagas
 */
export function* sagas() {
  yield takeEvery(actions.REGISTER_START, registerAsync);
  yield takeEvery(actions.LOGIN_START, login);
}
