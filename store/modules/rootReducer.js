import { combineReducers } from 'redux';

import travel from './admin/travels/travelsSlice';
import cartTravels from './storefront/cart/reducer'
import form_passager from './admin/form_passager/reducer'

export default combineReducers({
  travel,
  cartTravels,
  form_passager
  
});
