import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Top = () => (
  <AnchorLink href='#/' style={{color:"#a2b9c6"}}>
    <div className="to-top">
      <FontAwesomeIcon icon={faAngleDoubleUp} className="fa-2x fa-border fa-pull-right" style={{opacity:"0.5"}}/>
    </div>
  </AnchorLink>

)

export default Top
