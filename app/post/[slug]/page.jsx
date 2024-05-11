import axios from "axios";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);

  return posts.map((el) => ({ slug: el.id + "" }));
}

async function fetchById(id) {
  const post = await axios
    .get("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((res) => res.data);

  return post;
}

export default async function ({ params }) {
  const post = await fetchById(params.slug);

  return (
    <section className="posts">
      <section className="post">
        <p className="postTitle">{post.title}</p>
        <p className="postBody">{post.body}</p>
        <Link style={{textDecoration: 0}} className="btnPrimary" href="/">
          Back
        </Link>
      </section>
    </section>
  );
}
