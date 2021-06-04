import { useState } from "react";
import Bloglist from "./Bloglist";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Blog",
      author: "Ankit",
      description: "I wanted to write a blog",
      id: 0,
    },
    {
      title: "My Second Blog",
      author: "Priyanka",
      description: "I always wanted to write a blog",
      id: 1,
    },
    {
      title: "My Third Blog",
      author: "Priya",
      description: "I desperately wanted to write a blog",
      id: 2,
    },
  ]);

  function handleDelete(id) {
    const newBlog = blogs.filter((item) => item.id !== id);
    setBlogs(newBlog);
  }

  return (
    <div className="home">
      <Bloglist blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
