import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
    <nav>
        <div className="left">
                <span>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.3zKq0CEfMUTvvxU9QB0yegHaHa?pid=Api&P=0&h=180" alt="Ac" />
                </span>
            </div>
      <div className='right'>
        <div>
        <Link to="/">
          <li>Home</li>
        </Link>
        </div>
        <div>
        <Link to="/qualifications">
          <li>Qualifications</li>
        </Link>
        </div>
        <div>
        <Link to="/skills">
          <li>Skills</li>
        </Link></div> 
        <div>
        <Link to="/internships">
          <li>Internships</li>
        </Link>
        </div>
        <div>
        <Link to="/certifications">
          <li>Certifications</li>
        </Link>
        </div>
        <div>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        </div>
      </div>
    </nav>
    </header>
    
  )
}

export default Navbar
