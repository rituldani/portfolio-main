import React from 'react';
import './css/About.css';
import image1 from './image/image1.jpg';

const About = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='about-section'>
            <div className='container'>
                <div className='pic'>
                <img src={image1} alt="Home Image" height={500} />
                </div>
                <div className='text'>
                    <h1>I'm a Software Developer</h1>
                    <p>I am Ritul Dani, a Computer Science Engineering student with a specialization in Artificial Intelligence and Machine Learning.
                        I have a strong foundation in C++ programming and web development technologies like HTML, CSS, JavaScript, and ReactJS. 
                        My academic journey has been enriched with hands-on projects such as a Placement Cell application, quizApp using react and many more. 
                        I am passionate about learning, building innovative solutions, and contributing to projects that make an impact.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default About;
