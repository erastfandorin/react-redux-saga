import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/action";
import Post from "./Post";
import Loader from "./Loader";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loader = useSelector((state) => state.app.loading);

  if (loader) {
    return <Loader />;
  }
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
