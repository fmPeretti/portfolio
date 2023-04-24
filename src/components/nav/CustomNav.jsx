import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import "./CustomNav.css"
import { HashLink } from 'react-router-hash-link';
function CustomNav() {
  return (
    <div className="navMenu">
      <p className='text-light navTitle' style={{fontWeight:500}}>Navigation</p>
      <HashLink to="/#"> <HomeIcon/> </HashLink>
      <HashLink to="/#cv"><ArticleIcon/></HashLink>
      <HashLink to="/#experience"><WorkIcon/></HashLink>
      <HashLink to="/#projects"><LightbulbIcon/></HashLink>
      <HashLink to="/#contact"><ContactPageIcon/></HashLink>
    </div>
  )
}

export default CustomNav