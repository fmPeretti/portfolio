import React from 'react';
import ProjectInfo from '../components/project_info/ProjectInfo';
import OrigamiImg from '../assets/project-pictures/origami.png';

const Origami = () => {
    const description = <>
        As part of my studies / training, I developed a CRUD(Create, Read, Update, Delete) project for an Origami Earrings seller using PHP, HTML, CSS, and SQL.The purpose of the project was to create a simple UI that allows the seller to track all the sales data easily and efficiently.
        <br />
        The Origami Earrings Sales Tracker consists of a web application that provides a user - friendly interface to manage and maintain the sales data.The seller can easily create, read, update, and delete sales data using the provided CRUD functionality.
        <br />
        The project was developed using PHP, HTML, and CSS for the front - end, and SQL for the back - end.
        <br />
        The database was designed to store all the sales data and to provide quick and easy access to the information.
        <br />
        Some of the features of the Origami Earrings Sales Tracker include:
        <br />
        - A dashboard that displays key metrics and sales data at a glance.
        <br />
        - The ability to add, edit, and delete sales data, including the customer's name, email address, item purchased, quantity, and price.
        <br />
        - The ability to view and filter sales data by date, customer, or item purchased.
        <br />
        - The ability to export sales data to a CSV file for further analysis or reporting.
        <br />
        Overall, the Origami Earrings Sales Tracker project showcases my skills in PHP, HTML, CSS, and SQL, as well as my ability to design and develop a web application that meets the specific needs of a client."
        <br />
    </>
    return (
        <ProjectInfo technologies={['php', 'html', 'css', 'sql']} description={description} name={'Origami Project'} title='Origami' subtitle='sales and inventory tracker' img={OrigamiImg} length='3 months' />
    )
}
export default Origami