import React from 'react';
import './css/home.css';
import image1 from './image/image1.jpg';

const Home = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='home-section' >
            <div className='text-section'>
                <div className='text'>
                    <h1>Hello,</h1>
                    <h2>I'm Ritul Dani</h2>
                    <p>I am Ritul Dani, a front-end developer passionate about creating responsive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React. With a keen eye for design and performance optimization, I strive to deliver seamless user experiences.</p>
                    {/* <button className='btn'>Dowload resume</button> */}
                    <a href="/resume.pdf" download="resume.pdf">
                        <button className="btn">Download Resume</button>
                    </a>
                </div>
            </div>
            <div className='photo-section'>
                <img className='img' src={image1} alt="Home Image" />
            </div>
        </div>
    );
});

export default Home;
