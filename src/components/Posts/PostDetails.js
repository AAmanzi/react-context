import React from "react";
import { Link, useParams } from "react-router-dom";

import { usePosts } from "../../providers/posts/hooks";
import Loading from "../Loading";

const PostDetails = () => {
  const params = useParams();
  const posts = usePosts();

  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <Loading />;
  }

  return (
    <div>
      <h3>Title: {post.title}</h3>
      <p>Id: {post.id}</p>
      <p>Author: {post.author}</p>
      <Link to={`/posts/edit/${post.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default PostDetails;
