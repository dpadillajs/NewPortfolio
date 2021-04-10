import React from 'react';
import './Footer.css';
import { Link } from '@material-ui/core';
import FreepikLogo from '../../assets/images/Freepik.png';

export default function Footer() {
    const FreepikHref = 'https://www.freepik.com/vectors/logo';

    return (
        <div className='footer-div'>
            <p>
                Looking to hire a developer?
                <br/>
                <span className='footer-span'>LET'S TALK</span>
            </p>
            <p className='footer-signature'>Handcrafted by me © twentytwentyone</p>
            <Link href={FreepikHref} target='_blank'>
                <img className='footer-attribute' src={FreepikLogo} alt='Designs by Freepik'/>
            </Link>
        </div>
    );
}
