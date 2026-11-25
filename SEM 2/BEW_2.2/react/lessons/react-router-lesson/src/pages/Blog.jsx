import { Link } from "react-router";

function Blog() {
  const posts = [
    { id: 1, title: "First post" },
    { id: 2, title: "Second post" },
    { id: 3, title: "Third post" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </div>
  );
}

export default Blog;
