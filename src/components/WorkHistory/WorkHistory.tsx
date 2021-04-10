import React from 'react';
import './WorkHistory.css';
import WorkHistoryData from '../../assets/json/work_data.json';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { HeaderTitle } from '../../containers/HeaderTitle/HeaderTitle';
import { Spacer } from '../../containers/Spacer/Spacer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faPiggyBank, faPrescription } from '@fortawesome/free-solid-svg-icons';

export default function WorkHistory() {
    const data = WorkHistoryData;
    const icons = new Map();
    icons.set('piggy-bank', faPiggyBank);
    icons.set('university', faUniversity);
    icons.set('prescription', faPrescription);

    return (
        <>
            <HeaderTitle titleOne='work' titleTwo='History'/>
            <Spacer divHeight={10}/>
            <Timeline align='alternate' className='work-history-timeline'>
                {data.map((x, i) => {
                    const icon = icons.get(x.iconName);
                    return (
                        <TimelineItem key={i}>
                            <TimelineSeparator>
                                <TimelineDot className='work-history-timeline-dot' variant='outlined'>
                                    <FontAwesomeIcon className='work-history-icon' icon={icon}/>
                                </TimelineDot>
                                {++i === data.length ? null : <TimelineConnector className='work-history-timeline-connector'/>}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={10} className='work-history-timeline-paper'>
                                    <Typography className='work-history-year-employed' component='h1' style={{background: x.color}}>
                                        {x.yearEmployed}
                                    </Typography>
                                    <Typography className='work-history-company-name' component='h1' style={{color: x.color}}>
                                        {x.companyName}
                                    </Typography>
                                    <Typography className='work-history-job-title'>
                                        {x.jobTitle}
                                    </Typography>
                                    <Typography>
                                        {x.jobSummary}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </>
    );
}
