import Link from "next/link";

export const PostItem = ({ post, deletePost }) => {
  return (
    <section className="post">
        <p className="postTitle">{post.title}</p>
        <p className="postBody">{post.body}</p>
        <Link href={`/post/${post.id}`} className="btnPrimary">More</Link>
        <button onClick={deletePost.bind(null, post.id)} className="btnPrimary">Delete</button>
    </section>
  );
};