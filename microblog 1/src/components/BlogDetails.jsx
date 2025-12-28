import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleClick = async () => {
    await fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    });
    navigate("/");
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
