import React from 'react'
import './HedderComponent.css'


function HedderComponent() {
  return (
    <>
    <div>
    <nav class="navbar">
        <div class="logo">
            <img src='public/images/logo.png' alt="NextGen Campus Logo" />

        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
    </div>
    </>
  )
}

export default HedderComponent