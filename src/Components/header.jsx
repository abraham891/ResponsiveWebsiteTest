import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/header.css";

export const Header = () => {
  const loginSuccess = useSelector((state) => state.loginStatus.loginSuccess);

  if (loginSuccess) {
    return (
      <div className="bg-primary">
        <nav className="navbar navbar-expand">
          <div className="m-2 me-auto">
            <h1 className="main_heading">My Website</h1>
          </div>
          <ul className="list-unstyled navbar-nav ms-auto">
            <Link to="/home">
              <li className="menu_items">Home</li>
            </Link>
            <Link to="/search">
              <li className="menu_items">Search</li>
            </Link>
            <Link to="/downloads">
              <li className="menu_items">Downloads</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="bg-primary">
        <nav className="navbar navbar-expand">
          <div className="m-2 me-auto">
            <h1 className="main_heading">My Website</h1>
          </div>
          <ul className="list-unstyled navbar-nav ms-auto">
            <Link to="/">
              <li className="menu_items">Register</li>
            </Link>
            <Link to="/login">
              <li className="menu_items">Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
};
