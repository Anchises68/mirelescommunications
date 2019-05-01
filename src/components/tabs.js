import React from 'react'
import { Link } from 'gatsby'

const Tabs = () => (
    <div className="tabs has-text-weight-light " >
      <ul className="has-text-grey">
        <li>
          <Link to="/">
            <span >Home</span>
          </Link>
        </li>
        <li>
          <Link to="/intro">
            <span >About Us</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <span >Our Work</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span >Contact Us</span>
          </Link>
        </li>
      </ul>
    </div>
)

export default Tabs
