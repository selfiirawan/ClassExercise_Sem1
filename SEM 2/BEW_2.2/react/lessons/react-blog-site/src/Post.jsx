import Comment from "./Comment";

export default function Post({ title, author, content, comments }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{content}</p>

      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
    </div>
  );
}
