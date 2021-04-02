import React from 'react';
import './ProjectHighlights.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup, IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faCode, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import ProjectData from '../../assets/json/project_data.json';
import Tooltip from "@material-ui/core/Tooltip";
import {HeaderTitle} from "../../containers/HeaderTitle/HeaderTitle";
import {Spacer} from "../../containers/Spacer/Spacer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

export default function ProjectHighlights() {
    const data = ProjectData;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const importAll = (img: __WebpackModuleApi.RequireContext) => img.keys().map(img);
    const allSkills = importAll(require.context('../../assets/images/skills', false, /\.(png|jpe?g|svg)$/));
    const allProjects = importAll(require.context('../../assets/images/projects', false, /\.(png|jpe?g|svg)$/));

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) =>
        setExpanded(isExpanded ? panel : false);

    const addLink = (hrefLink: string, icon: [IconPrefix, IconName] | IconLookup) =>
        <Link href={hrefLink} target="_blank">
            <FontAwesomeIcon icon={icon} className="proj-icons"/>
        </Link>

    return (
        <>
            <HeaderTitle titleOne="project" titleTwo="Highlights"/>
            <Spacer divHeight={40}/>
            <div className={classes.root}>
                {data.map((proj, i) =>
                    <Accordion
                        expanded={expanded === 'panel-' + i}
                        onChange={handleChange('panel-' + i)}
                        key={proj.projectTitle + " Accordion-" + i}
                    >
                        <AccordionSummary
                            className="proj-accordion-summary"
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls={"panel-content-" + i}
                            id={"panel-header" + i}
                        >
                            <Typography className="proj-title">{proj.projectTitle}</Typography>
                            <AvatarGroup>
                                {allSkills.map((skill: any) =>
                                    proj.projectSkills.map(projSkill =>
                                        skill.default.includes(projSkill) ?
                                            <Tooltip title={projSkill} placement="top" arrow>
                                                <Avatar key={projSkill + i} alt={projSkill + " Logo"} src={skill.default}/>
                                            </Tooltip>
                                            : null
                                    )
                                )}
                            </AvatarGroup>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} className="proj-image-grid">
                                    <Card className="proj-image-card">
                                        {allProjects.map((img: any) =>
                                            img.default.includes(proj.projectImg) ?
                                                <CardMedia
                                                    component="img"
                                                    key={proj.projectImg + " Website Photo"}
                                                    alt={"Picture of Demo Project " + proj.projectTitle}
                                                    image={img.default}
                                                    title={proj.projectTitle}
                                                />
                                                : null
                                        )}
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} className="proj-details-grid">
                                    <Grid item xs={12} className="proj-desc-grid">
                                        <Typography className="proj-desc">{proj.projectDesc}</Typography>
                                    </Grid>
                                    <Grid item xs={12} className="proj-icons-grid">
                                        {addLink(proj.projectUrl, faGlobe)}
                                        {addLink(proj.projectGitHub, faCode)}
                                        {addLink("#", faFileAlt)}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>
        </>
    );
}
