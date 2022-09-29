//제너레이터 , 특별한 역할을 하는 함수
import { all, fork } from 'redux-saga/effects'; //사가의 이펙트

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([ //배열을 받는데 배열안에 있는 것들을 한번에 실행해줌
    fork(postSaga), //fork는 함수를 실행한다는 뜻
    fork(userSaga), //call이랑 fork 차이점은 나중에 꼭 알고가기
  ]);
}

