/* eslint require-jsdoc: 0 */
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FINISH_SUCCESS = "LOGIN_FINISH_SUCCESS";
export const LOGIN_FINISH_ERROR = "LOGIN_FINISH_ERROR";

// ------------------------------------------
export const REGISTER_START = "REGISTER_START";
export const REGISTER_FINISH_SUCCESS = "REGISTER_FINISH_SUCCESS";
export const REGISTER_FINISH_ERROR = "REGISTER_FINISH_ERROR";

export function register(data) {
  return { type: REGISTER_START, data: data };
}
export function registerSuccess({ token }) {
  return { type: REGISTER_FINISH_SUCCESS, data: token };
}
export function registerError(error) {
  return { type: REGISTER_FINISH_ERROR, data: error };
}
// ------------------------------------------
export function startLogin(token) {
  return { type: LOGIN_START, data: token };
}
export function finishLoginSuccess({ token }) {
  return { type: LOGIN_FINISH_SUCCESS, data: token };
}
export function finishLoginError(error) {
  return { type: LOGIN_FINISH_ERROR, data: error };
}

// ------------------------------------------
// export function finishGetUserInfoSuccess(userInfo) {
//   return { type: USERINFO_FINISH_SUCCESS, data: userInfo };
// }
// export function finishGetUserInfoError(error) {
//   return { type: USERINFO_FINISH_ERROR, data: error };
// }
