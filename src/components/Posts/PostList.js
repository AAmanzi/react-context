import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

import { useGetPosts } from "../../providers/posts/hooks";
import Loading from "../Loading";

const PostList = () => {
  const [getPosts, { data: posts, loading }] = useGetPosts();
  const [query, setQuery] = useState("");

  const callback = useCallback(
    debounce((query) => {
      console.log(`debounce call ${query}`);
    }, 1000),
    []
  );

  useEffect(() => {
    callback(query);
  }, [query]);

  useEffect(() => {
    getPosts();
  }, []);

  const handleQueryChange = (event) => {
    const { value } = event.target;

    setQuery(value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Link to="/posts/add">
        <button>Add new post</button>
      </Link>
      <input value={query} onChange={handleQueryChange} />
      <div className="postList">
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
