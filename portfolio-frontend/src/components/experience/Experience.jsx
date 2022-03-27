import React from 'react'
import './Experience.css'
import WorkCards from './WorkCards'
import SkillChips from './SkillChips'

function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <div className='experience-grid'> 
        <div className='work-cards'>
          <WorkCards />
        </div>
        <div className='chips'>
          <div className='skills-chips'>
            <SkillChips />
          </div>
        </div>  
      </div>
    </>
  )
}

export default Experience