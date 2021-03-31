import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutMePhoto from "./AboutMePhoto";
import AboutMeDesc from "./AboutMeDesc";
import { HeaderTitle } from "../../containers/HeaderTitle/HeaderTitle";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        photoDiv: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            float: 'left',
            margin: '25px 25px 10px 0'
        },
        descDiv: {
            maxWidth: '100%'
        }
    }),
);

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <HeaderTitle titleOne="about" titleTwo="Me"/>
                        </Grid>
                        <Container maxWidth="md">
                            <Grid item xs={4} className={classes.photoDiv}>
                                <AboutMePhoto/>
                            </Grid>
                            <Grid item xs={8} className={classes.descDiv}>
                                <AboutMeDesc/>
                            </Grid>
                        </Container>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}
