import React from 'react'
import './Footer.css'

const Footer = () => {
    const fullYear = new Date().getFullYear();

  return (
    <footer>
        &copy; {fullYear}  | Bishal Thapaliya
    </footer>       
  )
}

export default Footer