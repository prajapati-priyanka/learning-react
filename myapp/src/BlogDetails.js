import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && <div>Loading..</div>}
      {error && <div> {error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div className="blog-details-body"> {blogs.body}</div>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;
