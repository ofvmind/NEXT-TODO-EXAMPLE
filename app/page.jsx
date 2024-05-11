import axios from "axios";
import Image from "next/image";
import PostsList from "./components/PostsComponent/PostsList";

export default async function Home() {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data);

  return (
   <>
    <PostsList data={posts} />
   </>
  );
}
