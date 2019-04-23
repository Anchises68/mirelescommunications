import React from 'react'
import { Link } from 'gatsby'

const Tabs = () => (
  <div className="container has-text-centered" >
    <div class="tabs is-toggle is-centered" >
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/intro">
            <span>Intro</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Tabs
