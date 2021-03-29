import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        appBarHeader: {
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: 'linear-gradient(to right, #4f0e17, #a41d30)'
        },
        socialMediaLinks: {
            color: 'unset'
        }
    }),
);

export default function Navbar() {
    const classes = useStyles();
    const GitHubLink = "https://www.linkedin.com/in/davidmpadilla/";
    const LinkedInLink = "https://github.com/dpadillajs";

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBarHeader}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        David Padilla = {"{ "}Full Stack Developer{" }"}
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <a href={GitHubLink} rel="noreferrer" target="_blank" className={classes.socialMediaLinks}>
                            <IconButton aria-label="GitHub Navbar Menu Button" color="inherit">
                                <GitHubIcon />
                            </IconButton>
                        </a>
                        <a href={LinkedInLink} rel="noreferrer" target="_blank" className={classes.socialMediaLinks}>
                            <IconButton aria-label="LinkedIn Navbar Menu Button" color="inherit">
                                <LinkedInIcon />
                            </IconButton>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
