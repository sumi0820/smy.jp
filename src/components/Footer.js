import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="lg"/>
const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="lg"/>
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="lg"/>
const githubIcon = <FontAwesomeIcon icon={faGithub} size="lg"/>

const Share = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 0 2em;
`



const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            style={{ width: '100px' }}
            alt="Powered by Contentful"
          />
        </a>
        <p>
        © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Item>
      <Share>
                <a href="https://twitter.com/sumiya0820" target="_blank">{twitterIcon}</a>
                <a href="https://www.instagram.com/sumi0820/" target="_blank">{instagramIcon}</a>
                <a href="https://github.com/sumi0820" target="_blank">{githubIcon}</a>
                <a href="" target="_blank">{linkedinIcon}</a>
                {/* <a href="https://www.linkedin.com/in/sumiya-ushiro-27ba65133/" target="_blank">{linkedinIcon}</a> */}
      </Share>
    </List>

  </Wrapper>
)

export default Footer
