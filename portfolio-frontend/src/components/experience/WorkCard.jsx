
import React from 'react'
import { Badge } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import './Experience.css'
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
    backgroundColor: '#ed6c02',
    color: "white"
  }
});

function WorkCard(props) {
  const classes = useStyles();
  return (
    <Badge  badgeContent={props.badgeText} classes={{badge:classes[props.workplaceClass + "Badge"]}}>
        <div className='work-card'>
            <div className="work-info">
                <Avatar sx={{ width: 55, height: 55 }} src={props.logo}/>
                <h3 className='work-name'> {props.workplaceName} </h3>
                <h5 className='work-title'> {props.jobPosition} </h5>
            </div>
            <p className='work-description'> {props.workDescription} </p>
        </div>
    </Badge>
  )
}

export default WorkCard