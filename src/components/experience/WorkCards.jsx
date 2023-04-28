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
        workUrl={"https://www.stargazer.co/"}
        logo={STARGAZER}
        workDescription={
          <>
          As a developer for Stargazer, a marketing with influencers company with multiple clients, I was responsible for working on different portals for each client, where I refactored and developed new features. My day-to-day tasks included gaining valuable knowledge about the business logic, processes, and use cases of each client, allowing me to come up with new and innovative features for their portals. <br />

Working closely with the CTO and my team, I organized sprints, discussed design, and reviewed progress to ensure that all features were implemented efficiently and effectively. I also added support for new social media platforms, debugged and tested the portals, and maintained the codebase, addressing technical debt and fixing bugs as needed. <br />

Throughout this process, I utilized a range of technologies, including React.js, MaterialUI, CSS, MongoDB, Jest, node.js, JavaScript, and Mongoose. I also provided product support for internal users and contributed to brainstorming new product ideas, designing and developing proof of concept, MVPs, and experiments, and sometimes turning these ideas into fully-fledged projects. <br />

In addition to my development work, I conducted research on AI technologies and explored multiple AI services and APIs, including Text to Image, Text to Audio, Audio to Text, and Img to Video technologies, staying on the cutting edge of industry developments and bringing new ideas and approaches to the Stargazer team. <br />

Overall, my experience at Stargazer allowed me to gain valuable development and product experience while collaborating with a talented team to deliver high-quality solutions for multiple clients. 
          </>
          
        }
      />
      <WorkCard 
        badgeText="2 Years Job"
        workplaceClass="southward"
        workplaceName={<>Southward <br/> Solutions </>} 
        jobPosition="Fullstack Developer"
        workUrl={"https://www.southward-solutions.com.ar/"}
        logo={SOUTHWARD}
        workDescription={
          <>
            Complete Overhauling of legacy projects into new Technologies (Vue.js/JAVA).
            <br/>
            CRM/CRUD webapps Fullstack Development.
            <br/>
            Analisis and Design of Structures for new Projects or Modules.
            <br />
            Testing and Deployment of the projects.
            <br />
            Train new employees.
            <br /> 
            Constant Comunication and Support directly to the Client.
          </>
        }
      />

      <WorkCard 
        badgeText="6 Months Development"
        workplaceClass="inchik"
        workplaceName={"Inchik"} 
        workUrl={"https://www.instagram.com/inchik_arg/?hl=es"}
        jobPosition={<> Fullstack Developer <br /> and designer </>}
        logo={INCHIK}
        workDescription={
          <>
            Software implementation and design for local startup.
            
            The program allows the user to keep a record of the accounting variables such as vendors, stock and sales. 
            
            It also provides tools to automate the process of buying, selling and distribution of inventory.
            
            I've Developed and Designed the Data and Directory Structure aswell as the UI UX aspects of the app all by my self. 
             
            Technologies: React.js, Material UI, JavaScript, SQL, Express, Axios, Node, CSS.
          </>
        }
      />
      
    </>
  )
}

export default WorkCards