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
            Complete overhauling of all Stargazer sites.
            <br />
            Adding new features on any of the sites with the corresponding necessary backend changes.
            <br />
            Add support for new social media platforms.
            <br />
            Integrate various Third party SDKs and APIs to the projects.
            <br />
            Debbugging and Testing.
            <br />
            Maintenance, Technical debt and bug fixes.
            <br />
            Some of the Technologies are: React.js, MaterialUI, CSS, MongoDB, Jest, node.js, JavaScript, Mongoose.
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