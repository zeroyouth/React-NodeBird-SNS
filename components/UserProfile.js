import React, { useCallback, useEffect, useMemo } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  const style = useMemo(() => ({ marginTop: 10 }, []));
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>YE</Avatar>}
        title="youngeun"
      />
      <Button onClick={onLogOut} style={style}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;