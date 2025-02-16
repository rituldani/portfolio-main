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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus corporis accusantium delectus quasi numquam?
                        A maiores fugit commodi distinctio vel voluptatibus iure in recusandae sequi. Tenetur deleniti iure consectetur
                        dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab!</p>
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
