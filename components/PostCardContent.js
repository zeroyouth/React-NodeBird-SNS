import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => { //첫번째  게시글 #해시태그 #연예인
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s]+)/)) { //#붙어있는 것들
          return (
            <Link
              href={`/hashtag/${v.slice(1)}`}
              key={i}
            >
              <a>{v}</a>
            </Link>
          );
        }
        return v; //일반적인거 그대로 나옴
      })}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;