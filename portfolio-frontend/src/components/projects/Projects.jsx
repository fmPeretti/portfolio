import React from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './Projects.css'

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className='projects'>
        <div className='project'>
          <div className="projectPicture"> <img src="https://i0.wp.com/coachcedric.com/wp-content/uploads/2021/04/juego-duck-on-a-rock-game-1.jpg?fit=960%2C717&ssl=1"/> </div>
          <div className="projectName">Inchik Project</div>
          <div className="projectDescription"></div>
          <div className="projectButtons"></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src="https://i0.wp.com/coachcedric.com/wp-content/uploads/2021/04/juego-duck-on-a-rock-game-1.jpg?fit=960%2C717&ssl=1"/> </div>
          <div className="projectName"> casBOT </div>
          <div className="projectDescription"></div>
          <div className="projectButtons"></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src="https://i0.wp.com/coachcedric.com/wp-content/uploads/2021/04/juego-duck-on-a-rock-game-1.jpg?fit=960%2C717&ssl=1"/> </div>
          <div className="projectName"> Tic Tac Toe AI </div>
          <div className="projectDescription"></div>
          <div className="projectButtons"></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src="https://i0.wp.com/coachcedric.com/wp-content/uploads/2021/04/juego-duck-on-a-rock-game-1.jpg?fit=960%2C717&ssl=1"/> </div>
          <div className="projectName">Aros de Origami Project</div>
          <div className="projectDescription"></div>
          <div className="projectButtons"> </div>
        </div>        
      </div>
    </>
  )
}

export default Projects