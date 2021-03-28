import { useContext } from "react";

import { PostsContext } from ".";

const usePostsContext = () => {
  return useContext(PostsContext);
};

export const useGetPosts = () => {
  const {
    getPosts,
    state: { loading, posts },
  } = usePostsContext();

  return [getPosts, { data: posts, loading }];
};

export const usePosts = () => {
  const {
    state: { posts },
  } = usePostsContext();

  return posts;
};

export const useCreatePost = () => {
  const {
    createPost,
    state: { loading },
  } = usePostsContext();

  return [createPost, { loading }];
};
