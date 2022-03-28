import React from 'react'
import { Badge } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import './Experience.css'
import INCHIK from '../../assets/workplaces-icons/inchik.jpg'
import STARGAZER from '../../assets/workplaces-icons/stargazer.jpg'
import SOUTHWARD from '../../assets/workplaces-icons/southward.jpg'
import { makeStyles } from "@material-ui/core/styles";
import WorkCard from './WorkCard'

const useStyles = makeStyles({
  stargazerBadge: {
    backgroundColor: '#e91e63',
    color: "white"
  },
  inchikBadge:{
    backgroundColor: '#de6dac',
    color: "white"
  },
  southwardBadge:{
    backgroundColor: '#f3931b',
    color: "white"
  }
});

function WorkCards(props) {
  const classes = useStyles();
  return (
    <>
      <WorkCard 
        badgeText="Current Job"
        workplaceClass="stargazer"
        workplaceName="Stargazer" 
        jobPosition="Software Engineer"
        logo={STARGAZER}
        workDescription={"Software Engineer"}
      />
      <WorkCard 
        badgeText="2 Years Job"
        workplaceClass="southward"
        workplaceName={<>Southward <br/> Solutions </>} 
        jobPosition="Fullstack Developer"
        logo={SOUTHWARD}
        workDescription={"Software Engineer"}
      />

      <WorkCard 
        badgeText="6 Months Development"
        workplaceClass="inchik"
        workplaceName={"Inchik"} 
        jobPosition={<> Fullstack Developer <br /> and designer </>}
        logo={INCHIK}
        workDescription={"Software Engineer"}
      />
      
    </>
  )
}

export default WorkCards