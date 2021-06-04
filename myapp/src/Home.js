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
      author: "Ankit",
      description: "I have always been wanted to write a blog",
      id: 2,
    },
  ]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title={"All Blogs!"} />
      <Bloglist blogs={blogs.filter((item)=> item.author === "Ankit")} title={"Ankit's blogs"} />
    </div>
  );
}

export default Home;
