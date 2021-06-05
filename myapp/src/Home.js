import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    //   This Is just to show the loading until the fetch call happens. It is not reccomended.
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs")
        .then((response) =>{
          // This error is to handle the wrong endpoints
           if(!response.ok){
             throw Error("Could not fetch the data from that source");
           }
          return response.json();
      })

        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
       
          })
          // This is for network error or server is off
          .catch(err => {
            setIsPending(false)
            setError(err.message);
        }, 2000);
    });
  }, []);

  return (
    <div className="home">
     {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
}

export default Home;
