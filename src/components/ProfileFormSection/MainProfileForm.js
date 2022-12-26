import React, { useState, useEffect } from "react";
import { Container, Paper, Box, } from "@material-ui/core";
import { makeStyles, } from '@material-ui/core/styles';
import StepperProfileForm from "./StepperProfileForm";
//import { Elements, } from "@stripe/react-stripe-js";
//import { loadStripe } from '@stripe/stripe-js';
//import { publishableKeyGet } from './constants/functions'

const useStyles = makeStyles(theme => ({
    boxWrapper: {
        marginBottom: "55px",
        minHeight: "calc(26vh + 260px)"
    },
    container: {
        position: "relative",
        zIndex: "1100",
        marginTop: "-95px",
        marginBottom: "45px",
    }
}));

const MainProfileForm = () => {
    const classes = useStyles();
        return <Box component="main" className={classes.boxWrapper}>
        <Container maxWidth="md" className={classes.container}>
            <Paper elevation={5}>

                        <StepperProfileForm />

            </Paper>
        </Container>
    </Box>
}

export default MainProfileForm;