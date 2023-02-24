import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div id='header-container'>
      <header id='header-bar'>
        <nav id='navbar' className='top-navbar'>
          <div id='left-navbar'>
            <Link className='item' to="/">Home</Link>
            <Link className='item' to="news">News</Link>
            <Link className='item' to="contact">Contact Us</Link>
          </div>
          <div id='right-navbar'>
            <Link className='item' to="helps">Helps</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
