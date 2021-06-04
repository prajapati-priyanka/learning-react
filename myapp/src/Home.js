import { useState } from "react";

function Home(){

  const [blogs, setBlogs] = useState([{
     title: "My New Blog", author: "Ankit", description:"I wanted to write a blog", id: 0},
     { title: "My Second Blog", author : "Priyanka", description:"I always wanted to write a blog", id: 1 },
     {title: "My Third Blog", author : "Priya", description:"I have always been wanted to write a blog", id: 2 }
      ]);

 return(

    <div className= "home">

       { blogs.map((blogs)=>(
              
         <div className= "preview-blogs" key={blogs.id}>

         <h2>{ blogs.title}</h2>
         <p>Written By {blogs.author}</p>

         </div>

       )) }
        
    </div>
  

 )};

export default Home;