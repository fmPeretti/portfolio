import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div id="contact" className='contact-container'>
      <div>
        <p> Contact number: +54 11 65610715</p>
        <p> Send Me an Email: <a href="mailto:fmperetti@hotmail.com"> fmperetti@hotmail.com </a></p>
      </div>
      <div>
        <p> Location: Buenos Aires, Argentina</p>
        <p> Time Zone: <a href="https://dateful.com/time-zone-converter?t=2329&tz2=GMT-3" target="_blank">GMT-3</a></p>
      </div>
      <div>
        <p> Thanks for Visiting my portfolio! </p>
        <p> Developed by <a href="#"> Francisco Peretti </a> </p>
        <p> Made with React.js </p>
      </div>
    </div>
  )
}

export default Contact