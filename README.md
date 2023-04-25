# portfolio

Francisco Peretti.
Personal Portfolio
Features an Ineractive Resumee, and some Personal proyects.

## Getting started

need node 16 or above
run "npm i" to install all dependencies. (there are too many for this kind of project, im stupid for using react for this XD)
to run locally run "npm start"
to build run "npm run build"

Home page has 5 sections - About (tell a little bit about yourself) - CV (2 buttons to download or preview your resume) - Experience (where you put all of your professional experience in different cards) - Projects (where you display your different more interesting projects and side projects in little cards) - Contact section (the footer where you put your contact info etc...)

Components:
- CustomNav (Navigates with the Anchor link within the homepage different sections)
- Header (Header section of the Home Page)
- Contact (Footer section with contact information)
- About (About Section of the Home page)
- CV (Resume section of the Home Page, buttons to preview or download)
- Experience (Experience section of the Home Page, display different work experiences and your Tech Skills)
    - WorkCard (component that takes info about the experience and display it on a card)
    - SkillChips (List of Chips that display different tech skills, theres limited support of skills, check if theres all you need over there or add more inside this component)
- Projects (Projects section of the page, display your projects in cards) (the cards should be modularized but those arent :P im stupid part 2)
- Socials (Right Side Nav where you display links to your socials)
- Pages Components (Pages different from the home page, in this case are used to display more information about the projects)
- ProjectInfo (Use the work card to display more info about the projects)
 
