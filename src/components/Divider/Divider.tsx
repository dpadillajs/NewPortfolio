import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        divider: {
            border: 0,
            height: 1,
            backgroundImage: 'linear-gradient( to right, #fff, #a41d30, #fff )'
        }
    }),
);

export default function Divider() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <hr className={classes.divider}/>
            </Container>
        </React.Fragment>
    );
}
