import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </nav>
  );
};

export default Navbar;
