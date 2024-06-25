import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Linkedin from "../images/Linkedin.png"
import Twitter from "../images/Twitter.png"

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/News">News</Link>
        </li>
        <li>
          <Link to="/posts/categories/NFTs">NFTs</Link>
        </li>
        <li>
          <Link to="/posts/categories/Research">Research</Link>
        </li>
        <li>
          <Link to="/posts/categories/Lunching pool">Lunching pool</Link>
        </li>
        <li>
          <Link to="/posts/categories/Airdrop">Airdrop</Link>
        </li>
        <li>
          <Link to="/posts/categories/Ventures">Ventures</Link>
        </li>
        <li>
          <Link to="/posts/categories/Market updates">Market updates</Link>
        </li>
        <li>
          <Link to="/posts/categories/Tips and Tutorials">
            Tips and Tutorials
          </Link>
        </li>
        <li>
          <Link to="/posts/categories/Earn free crypto">Earn free crypto</Link>
        </li>
        <li>
          <Link to="/posts/categories/Web3">Web3</Link>
        </li>
      </ul>

      <h3 className="footer__links-title">Links</h3>
      <ul className="footer__categories">
        <li>
          <Link to="/privacy-policy">
            Privacy policy
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/donate">
            Donation
          </Link>
        </li>
        <li>
          <Link to="/warning">
            Warning
          </Link>
        </li>
      </ul>

      <h3 className="footer__links-title">Social</h3>
      <ul className="footer__links-icons">
        <li>
          <img src={Facebook} alt="Facebook" />
        </li>
        <li>
          <img src={Instagram} alt="Instagram" />
        </li>
        <li>
          <img src={Twitter} alt="Twitter" />
        </li>
        <li>
          <img src={Linkedin} alt="Linkedin" />
        </li>
      </ul>

      <div className="footer__copyright">
        <Link to={"/login"} style={{ color: "white" }}>
          Admin Login
        </Link>
        <small>All Rights Reserved &copy; Copyright, The Crypto Trades.</small>
      </div>
    </footer>
  );
};

export default Footer;
