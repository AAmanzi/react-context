import { createContext, useReducer } from "react";

import { fetchPosts, fetchCreatePost } from "../../data";
import { useErrorMessage } from "../error/hooks";

const initialState = {
  posts: [],
  loading: false,
};

export const PostsContext = createContext({
  state: { ...initialState },
  getPosts: () => {},
  createPost: () => {},
});

// Action type
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const CREATE_POST = "CREATE_POST";
const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
const CREATE_POST_ERROR = "CREATE_POST_ERROR";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts };
    case GET_POSTS_ERROR:
      return { ...state, loading: false };
    case CREATE_POST:
      return { ...state, loading: true };
    case CREATE_POST_SUCCESS:
      return { ...state, loading: false };
    case CREATE_POST_ERROR:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [, setErrorMessage] = useErrorMessage();

  const getPosts = () => {
    dispatch({ type: GET_POSTS });

    return fetchPosts()
      .then((posts) => {
        dispatch({ type: GET_POSTS_SUCCESS, posts });
      })
      .catch(() => {
        setErrorMessage("failed fetching posts");
        dispatch({ type: GET_POSTS_ERROR });
      });
  };

  const createPost = (post) => {
    dispatch({ type: CREATE_POST });

    return fetchCreatePost(post)
      .then((post) => {
        dispatch({ type: CREATE_POST_SUCCESS, post });

        return getPosts().then(() => post);
      })
      .catch(() => {
        dispatch({ type: CREATE_POST_ERROR });
      });
  };

  const value = {
    state,
    getPosts,
    createPost,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
