import { createStore, combineReducers } from 'redux';

import { LoanTypesReducer } from './reducers/LoanTypes.reducer';
import { DolarPriceReducer } from './reducers/dolarPrice.reducer';

const RootReducer = combineReducers({
  loanTypes: LoanTypesReducer,
  dolarPrice: DolarPriceReducer,
});

export default createStore(RootReducer);