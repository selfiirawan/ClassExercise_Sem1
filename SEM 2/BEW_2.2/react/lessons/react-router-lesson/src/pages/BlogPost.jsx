import { useParams } from "react-router";

export default function BlogPost() {
  let { id } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>This is the content for blog post ID: {id} </p>
    </div>
  );
}
