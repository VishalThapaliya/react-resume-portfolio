import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import resume from '../assets/Resume.pdf'

const navItems = [
    {
        id: 1,
        name: 'About',
        linkTo: '/about'
    },
    {
        id: 2,
        name: 'Resume',
        linkTo: '/resume'
    },
    {
        id: 3,
        name: 'Portfolio',
        linkTo: '/portfolio'
    },
    {
        id: 4,
        name: 'Blog',
        linkTo: '/blog'
    },
    {
        id: 5,
        name: 'Contact',
        linkTo: '/contact'
    },
]

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            {
                navItems.map((item) => (
                    <li className="navbar-item" key={item.id}>
                        <NavLink 
                            to={item.linkTo} 
                            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link' }
                        >                     
                            {item.name}                            
                        </NavLink>
                    </li>
                ))
            }

            <li className="navbar-item">
                <a 
                    href={resume} 
                    download={resume}
                    className='navbar-link resume-download-btn'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Download CV
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar