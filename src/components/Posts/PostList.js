import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../data";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      <Link to="/posts/add">
        <button>Add new post</button>
      </Link>
      <div className="post-list">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;
