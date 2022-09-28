//제너레이터 , 특별한 역할을 하는 함수
import { all, fork, call, put, take } from 'redux-saga/effects'; //사가의 이펙트
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data) //실제로 서버에 요청을 보냄
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data) //로그인 api 실행
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
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
    const result = yield call(logOutAPI) //로그인 api 실행
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.result.data
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post') //실제로 서버에 요청을 보냄
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data) //로그인 api 실행
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

function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([ //배열을 받는데 배열안에 있는 것들을 한번에 실행해줌
    fork(watchLogIn), //fork는 함수를 실행한다는 뜻
    fork(watchLogOut), //call이랑 fork 차이점은 나중에 꼭 알고가기
    fork(watchAddPost),
  ]);
}

