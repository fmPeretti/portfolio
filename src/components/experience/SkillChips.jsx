import React from 'react'
import './Experience.css'
import { Chip } from '@mui/material'
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import { MaterialUIIcon, GitIcon, PHPIcon, BootsrapIcon, CPlusPlusIcon, CSSIcon, HTMLIcon, JAVAIcon, MongoDBIcon, PhytonIcon, ReactIcon, VueIcon, TomcatIcon, GitLabIcon, NodejsIcon, BrainIcon, OpenAiIcon } from '../Icons/Icons';
import { makeStyles } from "@material-ui/core/styles";


const styles = {
  whiteChip: {
    backgroundColor: 'white',
    color: "black",
    fontWeight: '500',
    padding:'10px'
  },
};
const skill_chips = {
  python: <Chip style={styles.whiteChip} icon={<PhytonIcon />} label="Python" variant="filled" />,
  javascript: <Chip style={styles.whiteChip} icon={<JavascriptIcon />} label="JavaScript" variant="filled" />,
  problem_solving: <Chip style={styles.whiteChip} icon={<BrainIcon />} label="Problem Solving" variant="filled" />,
  react: <Chip style={styles.whiteChip} icon={<ReactIcon />} label="React" variant="filled" />,
  node: <Chip style={styles.whiteChip} icon={<NodejsIcon />} label="NodeJs" variant="filled" />,
  open_ai: <Chip style={styles.whiteChip} icon={<OpenAiIcon />} label="OpenAi" variant="filled" />,
  vue: <Chip style={styles.whiteChip} icon={<VueIcon />} label="Vue" variant="filled" />,
  java: <Chip style={styles.whiteChip} icon={<JAVAIcon />} label="JAVA" variant="filled" />,
  cpp: <Chip style={styles.whiteChip} icon={<CPlusPlusIcon />} label="C++" variant="filled" />,
  git: <Chip style={styles.whiteChip} icon={<GitIcon />} label="Git" variant="filled" />,
  sql: <Chip style={styles.whiteChip} icon={<StorageIcon />} label="SQL" variant="filled" />,
  mongo: <Chip style={styles.whiteChip} icon={<MongoDBIcon />} label="MongoDB" variant="filled" />,
  html: <Chip style={styles.whiteChip} icon={<HTMLIcon />} label="HTML" variant="filled" />,
  css: <Chip style={styles.whiteChip} icon={<CSSIcon />} label="CSS" variant="filled" />,
  material: <Chip style={styles.whiteChip} icon={<MaterialUIIcon />} label="Material" variant="filled" />,
  bootstrap: <Chip style={styles.whiteChip} icon={<BootsrapIcon />} label="Bootstrap" variant="filled" />,
  php: <Chip style={styles.whiteChip} icon={<PHPIcon />} label="PHP" variant="filled" />,
  tomcat: <Chip style={styles.whiteChip} icon={<TomcatIcon />} label="Tomcat" variant="filled" />,
}
function SkillChips({ all, skills = [] }) {
  return (
    <>
      <p className='text-light skill-tilte' style={{ fontWeight: 500 }}>SKILLS</p>
      {all ? Object.keys(skill_chips).map(skill => skill_chips[skill]) : skills.map(skill => skill_chips[skill])}
    </>
  )
}

export default SkillChips