import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}
