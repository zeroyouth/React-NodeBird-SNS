//댓글 작성 폼
import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id) //로그인 안하면 me가 없다.
  const { addCommentDone } = useSelector((state) => state.post);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button type="primary" htmlType="submit">전송</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;