import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dum'
const Navbar = () =>{
    return(
        <div>
    <nav>
                <li className="navbar">
                    <li><Link className='Link' to="/"Home></Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/serivce">Service</Link></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Serivce</li>
                    </ul>
                </nav>
            </div>
        
    )
}

export default Navbar