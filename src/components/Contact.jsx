import React from 'react';
import './css/Contact.css';
import loc from './image/loc.png';
import mail from './image/mail.png';
import call from './image/call.png';

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className='contact-section' ref={ref}>
            <div className='con-sec'  >
                <h1 className='heading1'>Contact Me</h1>
                <div className='big-box' >
                    <div className='parts'>
                        <img src={loc} alt='#' height={30} width={10} />
                        <p className='p1' >Location</p>
                        <p className='p2' >Chittorgarh Raj.</p>
                    </div>
                    <div className='parts'>
                        <img src={mail} alt='#' height={30} width={10} />
                        <p className='p1' >Email</p>
                        <p className='p2' >rituldani2003@gmail.com</p>
                    </div>
                    <div className='parts'>
                        <img src={loc} alt='#' height={30} width={10} />
                        <p className='p1' >Phone Number</p>
                        <p className='p2' >9461261816</p>
                    </div>
                </div>
            </div>

        </div>
    );
});

export default Contact;

