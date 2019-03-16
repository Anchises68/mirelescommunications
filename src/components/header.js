import React from "react"
import { Link } from 'gatsby'
import Navbar from './navbar'

const Header = ({siteTitle}) => (
  <span>
    <Navbar/>
    <div className="text-center header-style caption" >

      <Link
        to="/"
      >
        <h1>{siteTitle}</h1>
      </Link>
      <h1 className="display-1" style={{lineHeight:"40%"}}><strong>Wonder</strong></h1>
      <h1 className="display-3" ><small> Hair Salon</small></h1>
      <hr style={{backgroundColor:"#a2b9c6", border:"0", height:"1px"}}/>
      <h2 >Let's wonder together!</h2>

    </div>
  </span>

)

export default Header
