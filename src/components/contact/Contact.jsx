import React from 'react'
import './Contact.css'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {
  return (
    <div id="contact" className='contact-container'>
      <div>
        <a href="https://www.linkedin.com/in/francisco-peretti-b65b9517b" target="_blank"><LinkedInIcon /></a>
        <a href="mailto: fmperetti@hotmail.com?subject=Mail from portfolio" target="_blank"><MailIcon /></a>
        <a href="https://t.me/franciscoPeretti" target="_blank"><TelegramIcon /></a>
        <a href="https://gitlab.com/fmPeretti" target="_blank"><GitHubIcon /></a>
        <p> Contact number: +54 11 65610715</p>
        <p> Send Me an Email: <a href="mailto:fmperetti@hotmail.com"> fmperetti@hotmail.com </a></p>
      </div>
      <div>
        <p> Location: Buenos Aires, Argentina</p>
        <p> Time Zone: <a href="https://dateful.com/time-zone-converter?t=2329&tz2=GMT-3" target="_blank">GMT-3</a></p>
      </div>
      <div>
        <p> Thanks for Visiting my portfolio! </p>
        <p> Developed by <a href="/#"> Francisco Peretti </a> </p>
        <p> Made with 🧡 and React.js </p>
      </div>
    </div>
  )
}

export default Contact