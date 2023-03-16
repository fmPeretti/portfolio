import React from 'react'

import './Projects.css'
import TicTacToe from '../../assets/project-pictures/tictactoe.png'
import Casbot from '../../assets/project-pictures/casbot.png'
import Origami from '../../assets/project-pictures/origami.png'
import Inchik from '../../assets/project-pictures/inchik.png'
import Thumbnail from '../../assets/project-pictures/thumbnail.png'
import WSIE from '../../assets/project-pictures/whatshouldieat.png'
function Projects() {
  return (
    <div id="projects" className="projectView">
      <h1 className='projectTitle'>Projects</h1>
      <div className='projects'>
        <div className='project'>
          <div className="projectPicture"> <img src={WSIE}/> </div>
          <div className="projectName">What should i eat? AI</div>
          <div className="projectButtons" style={{color:'orange'}}>🚧Work in progress!🚧</div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={Thumbnail}/> </div>
          <div className="projectName">Thumbnail Generator AI</div>
          <div className="projectButtons"><a href='/about_thumbnail'>More Info</a></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={TicTacToe}/> </div>
          <div className="projectName"> Tic Tac Toe AI </div>
          <div className="projectButtons"><a href='/about_ttt'>More Info</a></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={Inchik}/> </div>
          <div className="projectName">Inchik Project</div>
          <div className="projectButtons"><a target="_blank" href='https://gitlab.com/fmPeretti/inchik_front'>Try it!</a></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={Casbot} /> </div>
          <div className="projectName"> casBOT </div>
          <div className="projectButtons"><a href='/about_casbot'>More Info</a></div>
        </div>
        <div className='project'>
          <div className="projectPicture"> <img src={Origami}/> </div>
          <div className="projectName">Aros de Origami Project</div>
          <div className="projectButtons"><a href='/about_origami'>More Info</a></div>
        </div>
      </div>
    </div>
  )
}

export default Projects