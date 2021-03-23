import React from "react";
import Header from "./components/Header";
import PostInput from "./components/PostInput";
import Post from '../Post'
export default function Index() {
  return (
    <div>
      <Header />
      <PostInput />
      <div className="posts-stream">
        <Post />
      </div>
    </div>
  );
}
