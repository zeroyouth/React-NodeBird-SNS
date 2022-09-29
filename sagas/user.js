import axios from 'axios';
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";

function logInAPI(data) {
  return axios.post('/api/login', data) //실제로 서버에 요청을 보냄
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data) //로그인 api 실행
    yield delay(1000); //아직 서버 없어서 이거씀
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.result.data
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout') //실제로 서버에 요청을 보냄
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI) //로그인 api 실행
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.result.data
    });
  }
}


function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}