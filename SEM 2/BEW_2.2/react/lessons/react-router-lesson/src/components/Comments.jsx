import { useParams } from "react-router";

export default function Comments() {
  let { id } = useParams();
  return (
    <div>
      <h2>Comments for Blog Post ID: {id}</h2>
      <p>Comment 1 for post id: {id}</p>
      <p>Comment 2 for post id: {id}</p>
    </div>
  );
}
