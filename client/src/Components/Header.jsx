import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { UserContext } from '../context/userContext';

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)

    const closeNavHandler = () => {
        if(window.innerWidth < 800) {
            setIsNavShowing(false)
        } else {
            setIsNavShowing(true)
        }
    }

    const {currentUser} = useContext(UserContext)


  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo' onClick={closeNavHandler}>
                <h3>BLOG APP</h3>
            </Link>
            {currentUser && isNavShowing && <ul className="nav__menu">
                <li><Link to={`/profile/${currentUser._id}`} onClick={closeNavHandler}>{currentUser?.name}</Link></li>
                <li><Link to='/create' onClick={closeNavHandler}>Create Post</Link></li>
                <li><Link to='/contact' onClick={closeNavHandler}>Contact</Link></li>
                <li><Link to='/logout' onClick={closeNavHandler}>Logout</Link></li>
            </ul>}
            
            {!currentUser && isNavShowing && <ul className="nav__menu">
                <li><Link to='/login' onClick={closeNavHandler}>Author Login</Link></li>
                <li><Link to='/contact' onClick={closeNavHandler}>Contact</Link></li>
            </ul>}

            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <AiOutlineClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Header