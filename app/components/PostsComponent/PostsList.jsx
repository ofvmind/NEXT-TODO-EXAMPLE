"use client";

import { useState } from "react";
import { PostItem } from "./PostItem";
import { useFilter } from "@/app/hooks/useFilter";

const PostsList = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [searchQuery, setSearhQuery] = useState('');
  
  const searchedPosts = useFilter(posts, searchQuery);

  const deletePost = id => setPosts(posts.filter(el => el.id !== id));

  if (!posts.length) return <p>Posts not found</p>;

  return (
    <ul className="posts">
      <input className="searchInput" value={searchQuery} onChange={e => setSearhQuery(e.target.value)} placeholder="search posts...." type="text" />
      {searchedPosts.map(post =>
        <PostItem key={post.id} post={post} deletePost={deletePost}/>
      )}
    </ul>
  );
};

export default PostsList;