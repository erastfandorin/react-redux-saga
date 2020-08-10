import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost, showAlert } from "../redux/action";
import { Alert } from "./Alert";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const alertText = useSelector((state) => state.app.alert);
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const addPosts = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return dispatch(
        showAlert("Пожалуста виберити название для вашего поста!")
      );
    }

    const newPost = { id: Date.now().toString(), title };
    setTitle("");
    dispatch(createPost(newPost));
  };

  return (
    <form onSubmit={addPosts}>
      {alertText && <Alert alertText={alertText} />}
      <div className="form-group">
        <label htmlFor="title">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={changeTitle}
        />
      </div>
      <button className="btn btn-success" type="submit">
        Создать
      </button>
    </form>
  );
};

export default PostForm;
