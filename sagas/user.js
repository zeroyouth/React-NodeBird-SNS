import axios from 'axios';
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST,
  LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST,
  SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/api/login', data) //실제로 서버에 요청을 보냄
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data) //로그인 api 실행
    yield delay(1000); //아직 서버 없어서 이거씀
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: LOG_IN_FAILURE,
      error: err.result.data
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
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.result.data
    });
  }
}

function signUpAPI() {
  return axios.post('/api/singUp')
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI); 
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.result.data
    });
  }
}


function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}