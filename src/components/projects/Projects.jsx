import React from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './Projects.css'
import TicTacToe from '../../assets/project-pictures/tictactoe.png'
import Casbot from '../../assets/project-pictures/casbot.png'
import Origami from '../../assets/project-pictures/origami.png'
import Inchik from '../../assets/project-pictures/inchik.png'
function Projects() {
  return (
    <div id="projects" className="projectView">
      <h1 className='projectTitle'>Projects</h1>
      <div className='projects'>
        <div className='project'>
          <div className="projectPicture"> <img src={Inchik}/> </div>
          <div className="projectName">Inchik Project</div>
          <div className="projectButtons"><a>Try it!</a></div>

        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={Casbot} /> </div>
          <div className="projectName"> casBOT </div>
          <div className="projectButtons"><a>More Info</a></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={TicTacToe}/> </div>
          <div className="projectName"> Tic Tac Toe AI </div>
          <div className="projectButtons"><a>Try it!</a></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={Origami}/> </div>
          <div className="projectName">Aros de Origami Project</div>
          <div className="projectButtons"><a>More Info</a></div>
        </div>        
      </div>
    </div>
  )
}

export default Projects