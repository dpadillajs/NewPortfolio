import React from 'react';
import './AboutMe.css';
import Photo from '../../assets/images/AboutMePhotoAlt.jpg';
import AboutMeData from '../../assets/json/about_data.json';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HeaderTitle } from '../../containers/HeaderTitle/HeaderTitle';
import { Spacer } from '../../containers/Spacer/Spacer';

export default function AboutMe() {
    const data = AboutMeData;

    return (
        <React.Fragment>
            <CssBaseline />
            <HeaderTitle titleOne='about' titleTwo='Me'/>
            <Spacer divHeight={30}/>
            <Container maxWidth='md' className='about-me-container'>
                <Grid item xs={4} className='about-me-avatar-grid'>
                    <Avatar alt='David Padilla' src={Photo} className='about-me-avatar' />
                </Grid>
                <Grid item xs={8} className='about-me-desc-grid'>
                    <p className='about-me-desc'>
                        {data.aboutMeDescOne}
                        <br/>
                        <br/>
                        {data.aboutMeDescTwo}
                    </p>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
