import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from 'react'
import './NavBar.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <nav>
      <div className='title-box'>
        <Nav.Link href="main" className={activeLink === 'main' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('main')}>SPEEDDIAL</Nav.Link>
      </div>

      <div className='buttons'>
        <ul     className='buttons-inner'>
          <li><Link to="/message" className='each-button'>Demo</Link></li>
          <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link1'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
        <button className='button'>Start Now!</button>
        </ul>
      </div>
    </nav>
  )
}