import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AboutMeData from '../../assets/json/about_data.json';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fontStyles: {
            fontSize: 16,
            fontStyle: 'italic'
        }
    }),
);

export default function AboutMeDesc() {
    const classes = useStyles();
    const data = AboutMeData;

    return (
        <p className={classes.fontStyles}>
            {data.aboutMeDescOne}
            <br/>
            <br/>
            {data.aboutMeDescTwo}
        </p>
    );
}
