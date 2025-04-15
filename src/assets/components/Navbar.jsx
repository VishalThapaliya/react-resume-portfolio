import React from 'react'
import './Navbar.css';

const navItems = [
    {
        id: 1,
        name: 'About',
        className: 'navbar-link active'
    },
    {
        id: 2,
        name: 'Resume',
        className: 'navbar-link'
    },
    {
        id: 3,
        name: 'Portfolio',
        className: 'navbar-link'
    },
    {
        id: 4,
        name: 'Blog',
        className: 'navbar-link'
    },
    {
        id: 5,
        name: 'Contact',
        className: 'navbar-link'
    },
]

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            {
                navItems.map(item => (
                    <li className="navbar-item" key={item.id}>
                        <button className={item.className} data-nav-link>{item.name}</button>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar