import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess } from './actions';

// function with * after means it is genator, it is the same as async function, but more powerful
// yield is the samething of await
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSucess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
