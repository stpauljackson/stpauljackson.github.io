import './contact.css';
import Contactcard from '../components/contactcard';

import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';

export default function Contact(){
    return(
        <div className="contact">
            <h1>Intrested?</h1>
            <Contactcard />
            <p className="or">OR</p>
            <p className="contacttext">Feel free to reach me out on</p> 
            <div className="links">
                <a href="https://github.com/stpauljackson" rel="noreferrer" target="_blank" >
                <img src={github} alt=""/>
                </a>
                <a href="mailto:stpauljackson3@gmail.com" rel="noreferrer" target="_blank" >
                <img src={gmail} alt=""/>
                </a>
                <a href="https://www.instagram.com/sushantkumar587" rel="noreferrer" target="_blank" >
                <img src={instagram} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/sushant-kumar-sk/" rel="noreferrer" target="_blank" >
                <img src={linkedin} alt=""/>
                </a>
                <a href="tel:8003329034" >
                <img src={whatsapp} alt=""/>
                </a>
            </div>
        </div>
    )
}