import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

function Socials() {
  return (
    <>
      <div>Socials</div>
      <a href="https://www.linkedin.com/in/francisco-peretti-b65b9517b" target="_blank"><LinkedInIcon/></a>
      <a href="mailto: fmperetti@hotmail.com?subject=Mail from portfolio" target="_blank"><MailIcon/></a>
      <a href="https://t.me/franciscoPeretti" target="_blank"><TelegramIcon/></a>
      <a href="https://gitlab.com/fmPeretti" target="_blank"><GitHubIcon/></a>
    </>
  )
}

export default Socials