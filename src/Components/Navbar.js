// type rfc for whole code. 
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
// const [style2,setStyle2] = useState({
//   color:"black"
// })
// const toggleMode1 = () => {
//   if (style2.color === "black") {
//     setStyle2("white");
//     setText2("Disable Dark Mode");
//   }
//   else{
//     setStyle2("black");
//     setText2("Enable Dark Mode");
//   }
// }
  return (
    <div className='Navbar'>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} col-12`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dropdown">Dropdown</a>
              </li>
              
            </ul>
            <div className= {`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}`}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}