import React from 'react'
import '../Styles/Navbar.css'

export default function Navbar() {
  return (
    <div>
            <div className="navbar">
        <div className="nav-logo">
            <a>
            <h2>LOGO</h2>
            </a>
        </div>
        <div className="nav-menu-mobile" data-status="closed">
            <span>MENU</span>
            <i className="menu-toggle fa-solid fa-bars"></i>
        </div>
        <ul className="nav-menu">
            <li><a className="nav-menu-item" href="/">Home</a></li>
            <li><a className="nav-menu-item" href="/ParkingSpace">ParkingSpace</a></li>
            <li><a className="nav-menu-item" href="/">Contact</a></li>
            <li>
            <div className="nav-menu-item nav-dropdown">
                About
                <a className="dropdown-item">Dropdown Item 1</a>
                <a className="dropdown-item">Dropdown Item 2</a>
                <a className="dropdown-item">Dropdown Item 3</a>
                <a className="dropdown-item">Dropdown Item 4</a>

            </div>
            </li>
            <li><a className="nav-menu-item" href="/">More</a></li>
        </ul>

        </div>
    </div>
  )
}
