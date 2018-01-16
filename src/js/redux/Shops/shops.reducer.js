import * as actions from './shops.actions';

const initialState = {
  error: null,
  shops: null,
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.FETCH_SHOPS_SUCCESS:
      return {shops:action.data}
    case actions.FETCH_SHOPS_ERROR:
      return Object.assign(state,{shops:null,error:action.data })
    default:
      return state
  }
}
