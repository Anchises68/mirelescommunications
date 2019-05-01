import React from 'react'
import { Link } from 'gatsby'

const Tabs = () => (
    <div className="tabs has-text-weight-light" >
      <ul className="has-text-grey">
        <li>
          <Link to="/">
            <span >Home</span>
          </Link>
        </li>
        <li>
          <Link to="/intro">
            <span >Intro</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <span >Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span >About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span >Contact</span>
          </Link>
        </li>
      </ul>
    </div>
)

export default Tabs
