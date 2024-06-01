import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to="/posts/categories/News">News</Link></li>
        <li><Link to="/posts/categories/NFTs">NFTs</Link></li>
        <li><Link to="/posts/categories/Research">Research</Link></li>
        <li><Link to="/posts/categories/Lunching pool">Lunching pool</Link></li>
        <li><Link to="/posts/categories/Airdrop">Airdrop</Link></li>
        <li><Link to="/posts/categories/Ventures">Ventures</Link></li>
        <li><Link to="/posts/categories/Market updates">Market updates</Link></li>
        <li><Link to="/posts/categories/Tips and Tutorials">Tips and Tutorials</Link></li>
        <li><Link to="/posts/categories/Earn free crypto">Earn free crypto</Link></li>
        <li><Link to="/posts/categories/Web3">Web3</Link></li>
      </ul>

      <div className="footer__copyright">
        <Link to={'/login'} style={{color: 'white'}}>Admin Login</Link>
        <small>All Rights Reserved &copy; Copyright, The Crypto Trades.</small>
      </div>
    </footer>
  )
}

export default Footer
