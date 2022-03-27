import React from 'react'
import { Badge } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import './Experience.css'
import INCHIK from '../../assets/workplaces-icons/inchik.jpg'
import STARGAZER from '../../assets/workplaces-icons/stargazer.jpg'
import SOUTHWARD from '../../assets/workplaces-icons/southward.jpg'
import { makeStyles } from "@material-ui/core/styles";

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

function WorkCards() {
  const classes = useStyles();
  return (
    <>
        <Badge  classes={{badge:classes.stargazerBadge}} badgeContent={"Current Job"} >
            <div className='work-card'>
              <div className="work-info">
                <Avatar sx={{ width: 55, height: 55 }} src={STARGAZER}/>
                <h3 className='work-name'> Stargazer </h3>
                <h5 className='work-title'>  Software Engineer </h5>
              </div>
              <p className='work-description'> Software Engineer </p>
            </div>
          </Badge>

          <Badge  badgeContent={"2 Years Job"} color="warning">
            <div className='work-card'>
              <div className="work-info">
                <Avatar classes={{badge:classes.southwardBadge}} sx={{ width: 55, height: 55 }} src={SOUTHWARD}/>
                <h3 className='work-name'> Southward <br /> Solutions </h3>
                <h5 className='work-title'> Fullstack Developer </h5>
              </div>
              <p className='work-description'> Software Engineer </p>
            </div>
          </Badge>
          <Badge  classes={{badge:classes.inchikBadge}} badgeContent={"6 Months Development"} color="error" >
            <div className='work-card'>
              <div className="work-info">
                <Avatar sx={{ width: 60, height: 60 }} src={INCHIK}/>
                <h3 className='work-name'> Inchik</h3>
                <h5 className='work-title'> Fullstack Developer <br /> and designer</h5>
              </div>
              <p className='work-description'> Software Engineer </p>
            </div>
          </Badge>
    </>
  )
}

export default WorkCards