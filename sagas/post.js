import axios from 'axios';
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";
// import { addComment } from '../reducers/post';

import {
  ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data) //실제로 서버에 요청을 보냄
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data) //로그인 api 실행
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: ADD_POST_FAILURE,
      data: err.result.data
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data); //실제로 서버에 요청을 보냄
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data) //로그인 api 실행
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (err) {//요청 실패시 
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.result.data
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}