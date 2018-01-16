import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './Auth/auth.reducer';
import shops from './Shops/shops.reducer';


export default combineReducers({
  form: formReducer,
  auth,
  shops,
});
