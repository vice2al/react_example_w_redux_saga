import { put, takeEvery, all } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* LoadAsync({ payload }) {
  yield put({type: "recipes/load_success", payload});
}

export function* watchLoadAsync() {
  yield takeEvery("recipes/load_request", LoadAsync);
}

export function* addAsync({ payload }) {
  yield delay(1000);
  yield console.log("Right on lad");
  yield put({type: "recipes/add_success", payload});
}

export function* watchAddAsync() {
  yield takeEvery("recipes/add_request", addAsync);
}

export function* RemoveAsync({ payload }) {
  yield delay(1000);
  yield console.log("Right on lad");
  yield put({type: "recipes/remove_success", payload});
}

export function* watchRemoveAsync() {
  yield takeEvery("recipes/remove_request", RemoveAsync);
}

export default function* rootSaga() {
  yield all([
  	helloSaga(),
  	watchLoadAsync(),
    watchAddAsync(),
    watchRemoveAsync()
  ])
}