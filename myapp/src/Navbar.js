import {Link} from "react-router-dom";

function Navbar(){
    return(   

        <div className= "navbar">
        <h1>My Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Blog</Link>
        </div>
        
        </div>

    )
}

export default Navbar;
