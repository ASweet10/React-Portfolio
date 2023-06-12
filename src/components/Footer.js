import React from 'react'
import LinkedInLogo from '../images/LinkedIn-Logo.png'
import GithubLogo from '../images/GitHub-Mark-Light-64px.png'
import EmailLogo from '../images/email-64.png'


export default function Footer() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/aaron-sweet-232690242/" target="blank">
        <img className ="social-logo" src={LinkedInLogo} alt="LinkedIn"/>
      </a>
      <a href="https://github.com/ASweet10/" target="blank">
        <img className ="social-logo" src={GithubLogo} alt="Github"/>
      </a>
      <a href="mailto:AaronSweet10@gmail.com" target="blank">
        <img className ="social-logo" src={EmailLogo} alt="MailTo: AaronSweet10@gmail.com"/>
      </a> 
    </div>

  )
}