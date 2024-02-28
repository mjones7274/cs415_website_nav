import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import * as Icons from "react-icons/fa"
import { Navbar, Nav } from 'rsuite';
import 'rsuite/Navbar/styles/index.css';
import 'rsuite/Nav/styles/index.css';


function NavbarTop() {
    const [dropdown, setDropdown] = useState(false);
  return (
    <>
        <Navbar>
            <Nav>
                <Nav.Item>
                    <Link to="/" className="navbar-logo">
                        CS415
                        <Icons.FaServer />
                    </Link>
                </Nav.Item>
                <Nav.Item><Link to="/" className="navbar-item">Home</Link></Nav.Item>
                <Nav.Item><Link to="/login" className="navbar-item">Login</Link></Nav.Item>
                <Nav.Item><Link to="/userprofile" className="navbar-item">User Profile</Link></Nav.Item>
                <Nav.Item><Link to="/users" className="navbar-item">Users</Link></Nav.Item>
                <Nav.Menu title="Modules" className="navbar-item">
                    <Nav.Item><Link to="/modules/1" className="navbar-menu"><b>Module 1</b> - Database VM</Link></Nav.Item>
                    <Nav.Item><Link to="/modules/2" className="navbar-menu">Module 2 - Django API</Link></Nav.Item>
                    <Nav.Item><Link to="/modules/3" className="navbar-menu">Module 3 - Custom Endpoints</Link></Nav.Item>
                    <Nav.Item><Link to="/modules/4" className="navbar-menu">Module 4 - React UI</Link></Nav.Item>
                    <Nav.Item><Link to="/modules/5" className="navbar-menu">Module 5 - Apache VM</Link></Nav.Item>
                    <Nav.Item><Link to="/modules/6" className="navbar-menu">Module 6 - Deploy Code</Link></Nav.Item>
                    <Nav.Item><Link to="/modules/7" className="navbar-menu">Module 7 - Midterm Assignment</Link></Nav.Item>
                </Nav.Menu>
                </Nav>
                <Nav pullRight>
                <Nav.Item><Link to="/register"><button className="btn">Register</button></Link></Nav.Item>
            </Nav>
        </Navbar>

    </>
  )
}

export default NavbarTop

