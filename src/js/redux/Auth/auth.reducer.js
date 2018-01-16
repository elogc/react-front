import * as actions from "./auth.actions";

const initialState = {
  error: null,
  token: null,
  userInfo: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN_FINISH_SUCCESS:
      return { error: null, token };
    case actions.LOGIN_FINISH_ERROR:
      return { error, token: null };
    case actions.REGISTER_FINISH_SUCCESS:
      return { error: null, token };
    case actions.REGISTER_FINISH_ERROR:
      return { error, token: null };
    default:
      return state;
  }
}
