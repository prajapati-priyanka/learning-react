import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(()=>{
   //   This Is just to show the loading until the fetch call happens. It is not reccomended.
     setTimeout(()=>{
      fetch(' http://localhost:8000/blogs')
      .then(response => response.json())
      .then(data => {
         setBlogs(data);
         setIsPending(false);
      },2000)
     })
  },[])

  return (
    <div className="home">
    {isPending && <div>Loading.....</div>}
    { blogs && <Bloglist blogs={blogs} /> }  
    </div>
  );
}

export default Home;
