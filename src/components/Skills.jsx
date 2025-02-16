import React from 'react';
import './css/Skills.css'

const Skills = React.forwardRef((props, ref) => {
    const importAll = (r) => {
        return r.keys().map(r);
    };

    const images = importAll(require.context('./image/skill-img', false, /\.(png|jpe?g|svg)$/));

    return (
        <div ref={ref} className='skills-section'>
            <h1>EXPERIENCE WITH</h1>
            <div className='section'>
                {images.map((image, index) => (
                    <img className='imgs' key={index} src={image} alt={`img-${index}`} style={{ height: '100px', width: '100px', margin: '10px' }} />
                ))}
            </div>
            <div className='about'>I have a strong foundation in programming, with proficiency in languages like C++, Python, and basic knowledge of Java.
                My web development skills cover both front-end and back-end technologies. On the front-end, I am skilled in HTML, CSS, JavaScript, and React.
                For back-end development, I have worked with PHP and Django for my projects only.
                My expertise also includes using frameworks and libraries such as React with Redux for state management </div>
        </div>
    );
});

export default Skills;
