import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import "./CustomNav.css"
function CustomNav() {
  return (
    <div className="navMenu">
      <p className='text-light navTitle' style={{fontWeight:500}}>Navigation</p>
      <a href="#about"><HomeIcon/></a>
      <a href="#cv"><ArticleIcon/></a>
      <a href="#experience"><WorkIcon/></a>
      <a href="#projects"><LightbulbIcon/></a>
      <a href="#contact"><ContactPageIcon/></a>
    </div>
  )
}

export default CustomNav