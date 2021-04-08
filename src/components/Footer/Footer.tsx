import React from 'react';
import './Footer.css';
import { Link } from "@material-ui/core";
import FreepikLogo from '../../assets/images/Freepik.png';

export default function Footer() {
    const FreepikHref = "https://www.freepik.com/vectors/logo";

    return (
        <div className="footerDiv">
            <p>
                Looking to hire a developer?
                <br/>
                <span className="footerText">LET'S TALK</span>
            </p>
            <p className="footerSig">Handcrafted by me © twentytwentyone</p>
            <Link href={FreepikHref} target="_blank">
                <img className="footerAttr" src={FreepikLogo} alt="Designs by Freepik"/>
            </Link>
        </div>
    );
}
