import React from 'react';
import ProjectInfo from '../components/project_info/ProjectInfo';
import TicTacToeImg from '../assets/project-pictures/tictactoe.png';

const TicTacToe = () => {
    const description = <>
        I created a Python script that can win the Tic Tac Toe game every time.
        <br />
        Using Backtracking algorithms and strategic thinking, the script analyzes the game board to determine the best possible move in each turn.
        <br />
        It can anticipate the opponent's next move and adapt its strategy accordingly, ensuring a guaranteed victory every time.
        <br />
        <br />
        This project challenged me to think critically and creatively, and allowed me to apply my knowledge of Python programming and game theory to create a functional and effective solution.
    </>
    return (
        <ProjectInfo technologies={['python','problem_solving']} description={description} name={'TicTacToe'} title='TicTacToe' subtitle='Python Script' img={TicTacToeImg} length='1 week' />
    )
}
export default TicTacToe