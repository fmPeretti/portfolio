import React from 'react';
import ProjectInfo from '../components/project_info/ProjectInfo';
import ThumnailGeneratorImg from '../assets/project-pictures/thumbnail.png';

const ThumnailGenerator = () => {
    const description = <>
        While working at stargazer, I was given the task to develop this app as an MVP and a Proof of concept.
        <br />
        The app would get the video title, video description and a picture of the user, and would generate some pictures using GPT-3 and MidJourney, and then process the user's picture to put it on top of the AI generated one
        potentially creating a good thumbnail for the youtube video. 
        <br />
        I wrote the Script in python and used multiple APIs as OpenAi API (To use GPT-3 and Dall-e), Discord Api (as a user interface and also to connect to Mid Journey).
        <br />
        We made the landing page and the thumbnail preview page with next.js 
        <br />
        The app is deployed on firebase and is integrated with google analytics.
    </>
    return (
        <ProjectInfo technologies={['python', 'problem_solving', 'open_ai']} description={description} name={'Thumbnail Generator AI'} title='AI' subtitle='Thumbnail generator' img={ThumnailGeneratorImg} length='1 month' />
    )
}
export default ThumnailGenerator