import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, subtractCount } from "~/stores/count/actions";
import { RootState } from "~/interfaces/store-types";
import { fetchPosts } from "~/stores/posts/actions";

const IndexPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.countStore.count);
  const posts = useSelector((state: RootState) => state.postStore.posts);

  return (
    <>
      <h1>Hello Next.js ! 👋</h1>
      <h2>Check Redux</h2>
      <h3>{`Counter: ${counter}`}</h3>

      <button
        onClick={() => {
          dispatch(subtractCount());
        }}
      >
        -1
      </button>

      <button
        onClick={() => {
          dispatch(addCount());
        }}
      >
        +1
      </button>

      <hr />
      <h2>Check Redux-Thunk</h2>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        FETCH
      </button>
    </>
  );
};

export default IndexPage;
