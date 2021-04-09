import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Photo from '../../assets/images/AboutMePhotoAlt.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            width: '100%',
            maxWidth: theme.spacing(22.5),
            maxHeight: theme.spacing(22.5),
            height: 'auto',
            boxShadow: '0 0rem 2rem rgb(0 0 0 / 35%)',
            opacity: .9
        }
    }),
);

export default function AboutMePhoto() {
    const classes = useStyles();
    return <Avatar alt="David Padilla" src={Photo} className={classes.avatar} />
}
