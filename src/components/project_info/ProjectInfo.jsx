import React from 'react'
import './ProjectInfo.css'
import WorkCard from '../experience/WorkCard'
import SkillChips from '../experience/SkillChips'

const ProjectInfo = ({ name, title, subtitle, description, link, technologies, img, length }) => {
    return (
        <div id="main">
            <h1 className="title">{name}</h1>
            <div className='grid'>
                <div className='work-cards'>
                    <WorkCard
                        badgeText={length}
                        workplaceClass="stargazer"
                        workplaceName={title}
                        jobPosition={subtitle}
                        workUrl={link}
                        logo={img}
                        workDescription={description}
                    />
                </div>
                <div className='chips'>
                    <div className='skills-chips'>
                        <SkillChips skills={technologies} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo