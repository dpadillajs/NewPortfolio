import React from 'react';
import './Navbar.css';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import Resume from '../../assets/pdf/DavidPadilla_FullStackResume.pdf';

export default function Navbar() {
    const GitHubHref = 'https://github.com/dpadillajs';
    const LinkedInHref = 'https://www.linkedin.com/in/davidmpadilla/';
    const ResumeHref = Resume;
    const PhoneHref = 'tel:919-869-9647';
    const EmailHref = 'mailto:davidpadilla.dev@gmail.com?subject=Talent Acquisition'

    const addLink = (type: string, hrefLink: string, attribute: boolean, customTag: OverridableComponent<SvgIconTypeMap>) =>
        <Link href={hrefLink} color='inherit' target='_blank' download={attribute}>
            <Tooltip title={type} arrow>
                <IconButton aria-label={type+' Navbar Menu Button'} color='inherit'>
                    {React.createElement(customTag)}
                </IconButton>
            </Tooltip>
        </Link>

    return (
        <AppBar position='static' className='navbar-appbar'>
            {addLink('Email', EmailHref, false, EmailIcon)}
            {addLink('Phone', PhoneHref, false, PhoneEnabledIcon)}
            {addLink('Resume', ResumeHref, true, DescriptionIcon)}
            {addLink('GitHub', GitHubHref, false, GitHubIcon)}
            {addLink('LinkedIn', LinkedInHref, false, LinkedInIcon)}
        </AppBar>
    );
}
