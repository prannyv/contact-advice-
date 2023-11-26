import React from 'react'
import './NavBar.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav>
      <div className='title-box'>
        <li><Link to="/" className='title'>SpeedDial</Link></li>
      </div>

      <div className='buttons'>
        <ul     className='buttons-inner'>
          <li><Link to="/demo" className='each-button'>Demo</Link></li>
          <li><Link to="/profiles" className='each-button'>About</Link></li>
          <button>Start Now</button>
        </ul>
      </div>
    </nav>
  )
}