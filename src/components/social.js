import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Icon = styled.li`
  margin: 0.5rem
`

function Social(props) {
  console.log(props.social)

  return (
    <nav className="content">
      <ul>
        <Icon className="icon">
          <a href="https://www.linkedin.com/in/alex-mireles-0a79999a/" aria-label="MirelesCloud" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} className="fas fa-lg has-text-grey-dark "/></a>
        </Icon>
        <Icon className="icon">
          <a href={props} aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fas fa-lg has-text-grey-dark"/></a>
        </Icon>
        <Icon className="icon">
          <a href="https://www.linkedin.com/in/alex-mireles-0a79999a/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-lg has-text-grey-dark"/></a>
        </Icon>
        <Icon className="icon">
          <a href="https://github.com/MirelesCloud" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fas fa-lg has-text-grey-dark"/></a>
        </Icon>
        <Icon className="icon">
          <a href="https://twitter.com/AlexMireles310" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fas fa-lg has-text-grey-dark"/></a>
        </Icon>
      </ul>
    </nav>
  )

}

export default Social
