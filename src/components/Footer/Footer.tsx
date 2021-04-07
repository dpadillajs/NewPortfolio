import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footerDiv: {
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: 'linear-gradient(to right, #4f0e17, #a41d30)',
            height: 150,
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            letterSpacing: 5,
            textAlign: 'center',
            fontSize: 16,
            fontStyle: 'italic',
            position: 'relative',
            alignItems: 'center'
        },
        footerText: {
            color: 'white',
            fontWeight: 900,
            fontStyle: 'normal',
            background: 'rgb(55, 55, 55)',
            padding: '3px 10px'
        },
        footerSig: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            fontSize: 9,
            fontStyle: 'normal',
            marginBottom: 16
        }
    }),
);

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.footerDiv}>
            <p>
                Looking to hire a developer?
                <br/>
                <span className={classes.footerText}>LET'S TALK</span>
            </p>
            <p className={classes.footerSig}>Handcrafted by me © twentytwentyone</p>
        </div>
    );
}
