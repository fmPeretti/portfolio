import React from 'react'
import './About.css'
function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <div className='about-card' > 
        <h3 className='text-bolder'> About Me:</h3>
        <h5 className='text-italic'>
          Im a very proactive Computer Science Student and
          Software developer from Buenos Aires Argentina. <br />
          I'm always excited to learn new things and to keep up with all the
          latest technology updates. 
        </h5>
      </div>
    </div>
  )
}

export default About