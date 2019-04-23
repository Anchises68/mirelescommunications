import React from 'react'

const Tabs = () => (
  <div className="container has-text-centered" >
    <div class="tabs is-toggle is-centered" style={{marginRight:"auto", marginLeft:"auto"}}>
      <ul>
        <li>
          <a href="/intro">
            <span>Intro</span>
          </a>
        </li>
        <li>
          <a href="/">
          <span>Work</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Tabs
