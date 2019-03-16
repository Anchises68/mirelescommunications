import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => (
  <div className="container" id='/'>
    <nav className="navbar navbar-expand-sm navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <AnchorLink  className="nav-item nav-link active" href='#/'>Home <span className="sr-only">(current)</span></AnchorLink>
          <AnchorLink offset='-300' className="nav-item nav-link" href='#appointment'>Appointment</AnchorLink>
          <AnchorLink offset='-400' className="nav-item nav-link" href='#services'>Services</AnchorLink>
          <AnchorLink offset='-300' className="nav-item nav-link" href='#pricing'>Pricing</AnchorLink>
          <AnchorLink offset='-300' className="nav-item nav-link" href='#gallery'>Gallery</AnchorLink>
          <AnchorLink offset='-300' className="nav-item nav-link" href='#hours'>Hours</AnchorLink>
          <AnchorLink offset='-300' className="nav-item nav-link" href='#contact'>Contact</AnchorLink>

        </div>
      </div>
    </nav>
  </div>

)


export default Navbar
