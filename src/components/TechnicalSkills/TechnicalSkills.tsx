import React from 'react';
import './TechnicalSkills.css';
import SkillData from '../../assets/json/skill_data.json';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderTitle } from '../../containers/HeaderTitle/HeaderTitle';
import { Spacer } from '../../containers/Spacer/Spacer';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const data = SkillData;
    const importAll = (img: __WebpackModuleApi.RequireContext) => img.keys().map(img);
    const images = importAll(require.context('../../assets/images/skills', false, /\.(png|jpe?g|svg)$/));
    const extractTitle = (imgPath: string) => ((imgPath.split('/static/media/'))[1].split('.'))[0];
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? prevProgress : prevProgress + 1));
        }, 100);
    }, []);

    return (
        <React.Fragment>
            <Container maxWidth='md' className='technical-skills-container'>
                <HeaderTitle titleOne='technical' titleTwo='Skills' colorTwo='white'/>
                <Spacer divHeight={30}/>
                <Grid container className='technical-skills-grid'>
                {images.map((img: any, i) =>
                    data.map(x =>
                        img.default.includes(x.skillName) ?
                            <div key={i} className='technical-skills-progress-div'>
                                <CircularProgress
                                    variant='determinate'
                                    value={progress >= x.skillLevel ? x.skillLevel : progress}
                                    className='technical-skills-progress'
                                />
                                <BootstrapTooltip title={extractTitle(img.default)} placement='top' arrow>
                                    <Avatar
                                        alt={extractTitle(img.default)+' Icon'}
                                        src={img.default}
                                        className='technical-skills-avatar'
                                    />
                                </BootstrapTooltip>
                                <div className='technical-skills-percentage'>
                                    {progress >= x.skillLevel ? x.skillLevel : progress}%
                                </div>
                            </div>
                            : null
                    )
                )}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
