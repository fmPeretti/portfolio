import React from 'react';
import ProjectInfo from '../components/project_info/ProjectInfo';
import CasbotImg from '../assets/project-pictures/casbot.png';

const Casbot = () => {
    const description = <>
        I created a chat bot called 'casbot' using Node.js and Discord.js API that lets users play games like Tic Tac Toe, Battleship, Roulette, and Coin Flip via the Discord App. 
        <br />
        The project challenged me to leverage my knowledge of APIs to create a functional and user-friendly chatbot using the discord API.
        <br />
        I implemented features like score tracking and error handling to ensure a seamless gaming experience for users.
        <br />
        This was the first discord bot id make but not the last one, Learning how to use the Discord API was really useful for many other projects.
    </>
    return (
        <ProjectInfo technologies={['node', 'javascript', 'problem_solving']} description={description} name={'Casbot'} title='Chat Bot' subtitle='casino games' img={CasbotImg} length='2 months' />
    )
}
export default Casbot