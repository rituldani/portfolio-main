// import React from 'react'
// import './Navbar.css'

// function Navbar() {
//   return (
//     <div className='navbar'>
//         <div className='nav'>
//             <div className='title'>
//                 <a href='/' className='portfolio'>Portfolio</a>
//             </div>
//             <div className='container1'>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Skills</li>
//                 <li>Projects</li>
//                 <li>Contact</li>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar'

import React, { useRef } from 'react';
import './Navbar.css';
import Home from './Home'; // Importing the Home component
import About from './About'; // Importing the About component
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

function Navbar() {
    // Refs for the sections
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    // Scroll function with offset to handle fixed navbar
    const scrollToSection = (section) => {
        if (section && section.current) {
            const offset = 70; // Adjust this for your navbar height
            window.scrollTo({
                top: section.current.offsetTop - offset, // Adjust the scroll position
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='root'>
            <div className='navbar'>
                <div className='nav'>
                    <div className='title'>
                        <a href='/' className='portfolio'>Portfolio</a>
                    </div>
                    <div className='container1'>
                        <li><button onClick={() => scrollToSection(homeRef)}>Home</button></li>
                        <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
                        <li><button onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
                        <li><button onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
                        <li><button onClick={() => scrollToSection(contactRef)}>Contact</button></li>
                    </div>
                </div>
            </div>

            <Home ref={homeRef} />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
        </div>
    );
}

export default Navbar;
