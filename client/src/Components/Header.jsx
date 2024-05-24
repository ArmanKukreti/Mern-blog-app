import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../images/Logo.png'

import { UserContext } from "../context/userContext";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  const { currentUser } = useContext(UserContext);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          <img style={{width: '200px'}} src={Logo} alt="Logo" />
        </Link>
        {currentUser && isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link to="/home" onClick={closeNavHandler}>
                All posts
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavHandler}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeNavHandler}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={closeNavHandler}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavHandler}>
                Logout
              </Link>
            </li>
            <li className="nav__img-div">
              <Link
                to={`/profile/${currentUser._id}`}
                onClick={closeNavHandler}
              >
                <div className="tooltip-container">
                  {currentUser?.avatar && (
                    <img
                      src={`/uploads/${currentUser?.avatar}`}
                      className="nav__profile-img"
                      alt="Profile Img"
                    />
                  )}

                  {!currentUser.avatar && (
                    currentUser.name
                  )}

                  <span className="tooltip-text">View Profile</span>
                </div>
              </Link>
            </li>
          </ul>
        )}

        {!currentUser && isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link to="/home" onClick={closeNavHandler}>
                All posts
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeNavHandler}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={closeNavHandler}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeNavHandler}>
                Author Login
              </Link>
            </li>
            <li>
              <Link to="/donate" onClick={closeNavHandler}>
                Donate
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeNavHandler}>
                Contact
              </Link>
            </li>
          </ul>
        )}

        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
