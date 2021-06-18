import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  // form submit

  function submitHandler(event) {
    // it prevents automatically refreshing of a page
    event.preventDefault();
    const blogsAdded = { title, body, author };
      // console.log(blogsAdded);

    setIsPending(true);

    // a POST request to add the blog to existing db.json

    fetch("https://my-json-server.typicode.com/prajapati-priyanka/my-json-server/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogsAdded)
    }).then(() => {
      alert("For Online json-server Changes aren't persisted between calls.. Check in console for successful API call");
      console.log("New Blog Added");
      setIsPending(false);
      // history.go(-1);
      history.push("/");
    });
  }

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      
      <form onSubmit={submitHandler}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <label>Blog Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog..</button>}
      </form>
    </div>
  );
}

export default Create;
