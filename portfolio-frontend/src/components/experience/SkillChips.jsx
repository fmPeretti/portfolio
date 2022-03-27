import React from 'react'
import './Experience.css'
import { Chip } from '@mui/material'
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import {MaterialUIIcon, GitIcon, PHPIcon, BootsrapIcon, CPlusPlusIcon, CSSIcon, HTMLIcon, JAVAIcon, MongoDBIcon, PhytonIcon, ReactIcon, VueIcon} from '../Icons/Icons';
import { makeStyles } from "@material-ui/core/styles";


const styles = {
    whiteChip: {
      backgroundColor: 'white',
      color: "black",
      fontWeight: '500',
    },
    redChip:{
      backgroundColor: '#ff1168',
      color: "white"
    },
    orangeChip:{
      backgroundColor: '#f3931b',
      color: "white"
    },
};

function SkillChips() {
  return (
    <>
        SKILLS
        <Chip style={styles.whiteChip} icon={<JavascriptIcon />} label="JavaScript" variant="filled" />
        <Chip style={styles.whiteChip} icon={<VueIcon />} label="Vue" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<ReactIcon />} label="React" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<MaterialUIIcon />} label="Material" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<PhytonIcon />} label="Python" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<JAVAIcon />} label="JAVA" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<StorageIcon />} label="SQL" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<GitIcon />} label="Git" variant="filled" />
        <Chip style={styles.whiteChip} icon={<MongoDBIcon />} label="MongoDB" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<BootsrapIcon />} label="Bootstrap" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<CPlusPlusIcon />} label="C++" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<CSSIcon />} label="CSS" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<HTMLIcon />} label="HTML" variant="filled"  />
        <Chip style={styles.whiteChip} icon={<PHPIcon />} label="PHP" variant="filled"  />
    
    </>
  )
}

export default SkillChips