import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer >
            <ul>
            <Link to = "/" className='link1'><li className = "heading">YourDesign.store</li></Link>
                <li >Made in India</li>
                <li >+918989141982</li>
                <li >vishunayak2001@gmail.com</li>
                <li >London Rubber Company (India) Ltd. Pallavaram(Madras)</li>
            </ul>
            <ul>
                <li  className = "heading">Information and Support</li>
                <Link to = "/aboutus" className='link'><li>About us</li></Link>
                <Link to = "/contactus" className='link'><li>Contact</li></Link>
                <Link to = "/terms" className='link'><li>Terms and condition</li></Link>
                <Link to = "/terms" className='link'><li >Policies</li></Link>
                <li >Frequently asked questions</li>
            </ul>
        </footer>
    )
}

export default Footer;
