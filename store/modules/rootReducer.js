import { combineReducers } from 'redux';

import travel from './admin/travels/travelsSlice';
import cartTravels from './storefront/cart/reducer'
import form_passager from './admin/form_passager/reducer'
import auth from './auth/reducer'

import ship from './admin/ship/reducer'
import user from './admin/user/reducer'

export default combineReducers({
  travel,
  cartTravels,
  form_passager,
  auth,

  ship,
  user,
  
});
