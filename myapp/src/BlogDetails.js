import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("https://my-json-server.typicode.com/prajapati-priyanka/my-json-server/blogs/" + id);

  const history = useHistory();

  function handleDelete() {
    fetch("https://my-json-server.typicode.com/prajapati-priyanka/my-json-server/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      alert("For Online json-server Changes aren't persisted between calls.. Check in console for successful API call");
     console.log('Blog Deleted');
      history.push("/");
    });
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading..</div>}
      {error && <div> {error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div className="blog-details-body"> {blogs.body}</div>
          <button onClick={handleDelete}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;
