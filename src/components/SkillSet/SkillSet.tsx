import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { HeaderTitle } from "../../containers/HeaderTitle/HeaderTitle";
import { Spacer } from "../../containers/Spacer/Spacer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        skillSetDiv: {
            background: '#801726',
            minWidth: '100%',
            padding: 50
        },
        grid: {
            justifyContent: 'center'
        },
        avatar: {
            width: 75,
            height: 'auto',
            margin: 3
        }
    }),
);

export default function SkillSet() {
    const classes = useStyles();

    const importAll = (img: __WebpackModuleApi.RequireContext) => {
        return img.keys().map(img);
    }

    const images = importAll(
        require.context('../../assets/images/skills', false, /\.(png|jpe?g|svg)$/)
    );

    return (
        <React.Fragment>
            <Container maxWidth="md" className={classes.skillSetDiv}>
                <HeaderTitle titleOne='technical' titleTwo='SkillSet' colorTwo="white"/>
                <Spacer divHeight={30}/>
                <Grid container className={classes.grid}>
                {images.map((img: any, i) => {
                    return (
                        <Avatar
                            alt="Programming Language Picture"
                            key={i}
                            src={img.default}
                            className={classes.avatar}
                        />
                    );
                })}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
