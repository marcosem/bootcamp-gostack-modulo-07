import { createStore } from 'redux';
// import reducer from './modules/cart/reducer';
import rootReducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

// createStore creates a "store" for all the default information we will use in this application
const store = createStore(rootReducer, enhancer);

export default store;
