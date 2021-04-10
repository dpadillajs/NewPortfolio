import React from 'react';
import './TechnicalSkills.css';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderTitle } from '../../containers/HeaderTitle/HeaderTitle';
import { Spacer } from '../../containers/Spacer/Spacer';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

const useStylesBootstrap = makeStyles(() => ({
    arrow: {
        color: 'white',
    },
    tooltip: {
        backgroundColor: 'white',
        color: '#a41d30'
    }
}));

const BootstrapTooltip = (props: TooltipProps) =>
    <Tooltip arrow classes={useStylesBootstrap()} {...props} />;

export default function TechnicalSkills() {
    const importAll = (img: __WebpackModuleApi.RequireContext) => img.keys().map(img);
    const images = importAll(require.context('../../assets/images/skills', false, /\.(png|jpe?g|svg)$/));
    const extractTitle = (imgPath: string) => ((imgPath.split('/static/media/'))[1].split('.'))[0];

    return (
        <React.Fragment>
            <Container maxWidth='md' className='technical-skills-container'>
                <HeaderTitle titleOne='technical' titleTwo='Skills' colorTwo='white'/>
                <Spacer divHeight={30}/>
                <Grid container className='technical-skills-grid'>
                {images.map((img: any, i) =>
                    <BootstrapTooltip key={i} title={extractTitle(img.default)} placement='top' arrow>
                        <Avatar
                            alt={extractTitle(img.default)+' Icon'}
                            src={img.default}
                            className='technical-skills-avatar'
                        />
                    </BootstrapTooltip>
                )}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
