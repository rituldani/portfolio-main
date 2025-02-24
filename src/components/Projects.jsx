import React from 'react';
import './css/Projects.css'
import project1 from './image/project1.png'
import project2 from './image/project2.png'
import project3 from './image/project3.png'
import project4 from './image/project4.png'
import project5 from './image/project5.png'
import project6 from './image/project6.png'

const Projects = React.forwardRef((props, ref) => {
    return (
        <div className='projects-section' ref={ref} >
            <h1>Projects I have</h1>
            <div className='main-section' >
                <div className='box' style={{ height: '250px', width: '400px', backgroundColor: 'transparent' }}>
                    <img className='box1' src={project1} alt='#' />
                    <p>Placement Cell Web Application</p>
                </div>
                <div className='box' style={{ height: '250px', width: '400px', backgroundColor: 'transparent' }}>
                    <img className='box1' src={project2} alt='#' />
                    <p>React Quiz App</p>
                </div>
                <div className='box' style={{ height: '250px', width: '400px', backgroundColor: 'transparent' }}>
                    <img className='box1' src={project3} alt='#' />
                    <p>React To-Do-List</p>
                </div>
                <div className='box' style={{ height: '250px', width: '400px', backgroundColor: 'transparent' }}>
                    <img className='box1' src={project4} alt='#' />
                    <p>Rock-Paper_Scissors Game</p>
                </div>
                <div className='box' style={{ height: '250px', width: '400px', backgroundColor: 'transparent' }}>
                    <img className='box1' src={project5} alt='#' />
                    <p>Login Page</p>
                </div>

                <div className='box' style={{ height: '250px', width: '400px', backgroundColor: 'transparent' }}>
                    <img className='box1' src={project6} alt='#' />
                    <p>Catch the Insect Game</p>
                </div>
            </div>
        </div>
    );
});

export default Projects;
