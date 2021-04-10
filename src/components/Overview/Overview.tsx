import React from 'react';
import 'aos/dist/aos.css';
import './Overview.css';
import AOS from 'aos';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBookReader, faDatabase } from '@fortawesome/free-solid-svg-icons';
import OverviewData from '../../assets/json/overview_data.json';

export default function Overview() {
    AOS.init();
    const data = OverviewData;
    const divStyle = { justifyContent: 'center' };
    const icons = new Map();
    icons.set("eye", faEye);
    icons.set("book-reader", faBookReader);
    icons.set("database", faDatabase);

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Grid container spacing={3} style={divStyle}>
                    {data.map((x, i) => {
                        const icon = icons.get(x.overviewIconName);
                        return (
                            <Grid item key={i} xs={12} sm={6} md={4}>
                                <Card className="overviewCard" data-aos="zoom-in-up">
                                    <CardContent className="overviewCardContent">
                                        <FontAwesomeIcon className="overviewCardIcon" icon={icon}/>
                                        <h5 className="overviewCardTitle">{x.overviewTitle}</h5>
                                        <p className="overviewCardDesc">{x.overviewDesc}</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
