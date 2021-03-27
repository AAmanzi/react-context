import React from "react";

import PostForm from "./PostForm";

const PostEdit = () => {
  const post = { id: 1, title: "neki post", author: "neki autor" };

  const handleUpdatePost = (postToUpdate) => {
    console.log(postToUpdate);
  };

  return <PostForm post={post} onSubmit={handleUpdatePost} />;
};

export default PostEdit;
