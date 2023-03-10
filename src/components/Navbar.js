import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
   {/*  <Link className="navbar-brand" to="/">{props.title}</Link> */}
   <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         {/*  <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
         <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       {/*  <li className="nav-item">
          <Link className="nav-link" to="aboutUs">{props.aboutText}</Link>
        </li>  */}     
      </ul>
   {/*    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
   {/*   <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDarkMode} />
        <label className={`form-check-label  text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>  */}

  <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={props.clickHandlerLight}/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault1" > Light </label>
  </div> 
  <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={props.clickHandlerDark}/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault1" > Dark </label>
  </div>
  <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={props.clickHandlerGreen}/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault1" > Green </label>
  </div>
  <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={props.clickHandlerInfo}/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexRadioDefault1" > Info </label>
  </div>
      {/* <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label className="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div> */}

    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
  };

Navbar.defaultProps={
    title:'Set title here',
    aboutText: 'About text here'
}  


