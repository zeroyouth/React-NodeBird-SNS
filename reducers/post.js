export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'youngeun',
    },
    content: '첫 번째 게시글 #해시태그',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: "https://img.hankyung.com/photo/202012/01.24791736.1.jpg"
    }, {
      src: 'https://ssl.pstatic.net/mimgnews/image/144/2021/11/23/0000776249_001_20211123080501374.jpg?type=w540'
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '우와~~',
    }, {
      User: {
        nickname: 'hero',
      },
      content: '굿굿',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = { //액션객체
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'youngeun',
  },
  Image: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
}

export default reducer;