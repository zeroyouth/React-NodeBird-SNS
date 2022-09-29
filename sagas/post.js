import axios from 'axios';
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";

function addPostAPI(data) {
  return axios.post('/api/post') //실제로 서버에 요청을 보냄
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data) //로그인 api 실행
    yield delay(1000);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.result.data
    });
  }
}


function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}