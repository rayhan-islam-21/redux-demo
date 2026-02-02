import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, error, posts } = useSelector((state) => state.posts);
  console.log("Posts from Redux Store:", posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts View</h1>
      {isLoading && <p>Loading posts...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostView;
