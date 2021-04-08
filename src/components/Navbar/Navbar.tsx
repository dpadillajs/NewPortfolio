import React from 'react';
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(() =>
    createStyles({
        navbar: {
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: 'linear-gradient(to right, #4f0e17, #a41d30)',
            position: 'fixed',
            display: 'flex',
            flexDirection: 'row',
            width: '-webkit-fill-available',
            justifyContent: 'space-evenly'
        }
    }),
);

export default function Navbar() {
    const classes = useStyles();
    const GitHubHref = "https://www.linkedin.com/in/davidmpadilla/";
    const LinkedInHref = "https://github.com/dpadillajs";
    const ResumeHref = Resume;
    const PhoneHref = "tel:919-869-9647";
    const EmailHref = "mailto:davidpadilla.dev@gmail.com?subject=Talent Acquisition"

    const addLink = (type: string, hrefLink: string, attribute: boolean, customTag: OverridableComponent<SvgIconTypeMap>) =>
        <Link href={hrefLink} color="inherit" target="_blank" download={attribute}>
            <Tooltip title={type} arrow>
                <IconButton aria-label={type + " Navbar Menu Button"} color="inherit">
                    {React.createElement(customTag)}
                </IconButton>
            </Tooltip>
        </Link>

    return (
        <AppBar position="static" className={classes.navbar}>
            {addLink("Email", EmailHref, false, EmailIcon)}
            {addLink("Phone", PhoneHref, false, PhoneEnabledIcon)}
            {addLink("Resume", ResumeHref, true, DescriptionIcon)}
            {addLink("GitHub", GitHubHref, false, GitHubIcon)}
            {addLink("LinkedIn", LinkedInHref, false, LinkedInIcon)}
        </AppBar>
    );
}
