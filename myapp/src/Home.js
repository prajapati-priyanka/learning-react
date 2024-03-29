import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs, isPending,error } = useFetch(" https://my-json-server.typicode.com/prajapati-priyanka/my-json-server/blogs/");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
}

export default Home;

// data:blogs means data here is used as a name blogs.
