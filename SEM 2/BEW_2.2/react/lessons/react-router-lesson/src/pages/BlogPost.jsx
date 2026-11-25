import { Link, Outlet, useNavigate, useParams } from "react-router";

export default function BlogPost() {
  let { id } = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate("/blog");
  };

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>This is the content for blog post ID: {id} </p>
      <Link to={`/blog/${id}/comments`}>View Comments</Link>
      <Outlet />
      <button onClick={goBack}>Back to Blog</button>
    </div>
  );
}
