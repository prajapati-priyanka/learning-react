function Bloglist({ blogs, handleDelete }) {
  //   const blogs = props.blogs;

  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
          <button onClick={() => handleDelete(item.id)}>Delete Blog!</button>
        </div>
      ))}
    </div>
  );
}

export default Bloglist;
