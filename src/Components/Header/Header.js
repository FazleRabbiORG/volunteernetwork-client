import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    history.go(0);
  };

  const name = JSON.parse(localStorage.getItem("name"));
  const email = JSON.parse(localStorage.getItem("email"));

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img src="https://i.ibb.co/Fg4mX7S/Group-1329.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link h6 active" href="/">
                Home
              </a>
            </li>


            {/* <li className="nav-item">
              <a className="nav-link h6 active" href="/">
                Donation
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link h6 active" href="/registeredEvent">
                Your Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h6 active" href="">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h6 active" href="/adminShowEvent">
                <article>Admin</article>
              </a>
            </li>
            {email && (
              <li className="nav-item">
                <b className="nav-link h6 active">{name}</b>
              </li>
            )}

            {email && (
              <li className="nav-item">
                <button
                  className="nav-link h6 active logout-btn"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            )}

            {!email && (
              <li className="nav-item">
                <a className="nav-link h6 active" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
