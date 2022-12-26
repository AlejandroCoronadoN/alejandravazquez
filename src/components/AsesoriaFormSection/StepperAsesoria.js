import React, { useState } from 'react';
import { uploadForm} from '../../context';
import { makeStyles } from '@material-ui/core/styles';
import { submitForm, useAuthDispatch } from '../../context';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    Box,
    Grid,
    CircularProgress,
} from '@material-ui/core';
import {
    SentimentVerySatisfied,
    SentimentVeryDissatisfied
} from '@material-ui/icons';
import StepperIcons from "./StepperIcons";
import AsesoriaForm1 from "./Forms/AsesoriaForm1";
import AsesoriaForm2 from "./Forms/AsesoriaForm2";
import AsesoriaForm3 from "./Forms/AsesoriaForm3";
import {  useContentState } from '../../context';
import StepConnector from './StepConnector'

// OVERALL STYLE
const style = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
    },
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "85px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    buttonWrapper: {
        justifyContent: "flex-end"
    },
}));


const StepContent = (props) => {
    switch (props.step) {
        case 0:
            return <AsesoriaForm1 
               setFirstName = {props.setFirstName}
               setLastName = {props.setLastName}
               setEmail = {props.setEmail}
               setEdad = {props.setEdad}
               //setGenero = {props.setGenero}
               //setAdress1 = {props.setAdress1}
               //setAdress2 = {props.setAdress2}
               //setCountry= {props.setCountry}
               //setPostalCode = {props.setPostalCode}
              // setCity= {props.setCity}
            />;
        case 1:
            return <AsesoriaForm2
                setPsichologistSex = {props.setPsichologistSex}
                setWhyTherapy = {props.setWhyTherapy}
            />;
        case 2:
            return <AsesoriaForm3
                setLastTherapy = {props.setLastTherapy}
                setLastTherapyType = {props.setLastTherapyType}
                setLastTherapyTypeScore = {props.setLastTherapyTypeScore}
                setCurrentTreatment = {props.setCurrentTreatment}
            />;
        default:
            return <></>;
    }
}

const StepperAsesoria = props => {
    const contentDetails = useContentState();
    const [cardStatus, setCardStatus] = useState(true);
    const [cardMessage, setCardMessage] = useState("");
    const classes = style();

    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);

    //FORM STATES
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [ genero, setGenero] = useState("");
    const [ psichologistSex, setPsichologistSex] = useState("");
    const [ whyTherapy, setWhyTherapy] = useState("");
    const [ lastTherapy, setLastTherapy] = useState("");
    const [ lastTherapyType, setLastTherapyType] = useState("");
    const [ lastTherapyTypeScore, setLastTherapyTypeScore] = useState("");
    const [ currentTreatment, setCurrentTreatment] = useState("");
    const dispatch = useAuthDispatch();
    const handleNext = () => {
        if (activeStep === 2) {
            capture()
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    const capture = async () => {
        const date = new Date();
        const formData = {
        collectionName: 'asesoriaForm',  //This Variable needs to be chnaged for each component and Firebase Collection
        firstName : firstName,
        lastName : lastName,
        email : email,
        edad:edad,
        //adress1 : adress1,
        //adress2 : adress2,
        //postalCode : postalCode,
        //country : country,
        //city : city,

        genero : genero,
        psichologistSex : psichologistSex,
        whyTherapy : whyTherapy,
        lastTherapy : lastTherapy,
        lastTherapyType : lastTherapyType,
        lastTherapyTypeScore : lastTherapyTypeScore,
        currentTreatment : currentTreatment,
        date:date,

        }
        console.log(' Stepper/capture ->formData:', formData);
        try {
          let response = await uploadForm(dispatch, {formData});

          window.location.href ='https://calendly.com/amaru-asesoria';

        } catch (error) {
          console.log('Error: Signup-> handleSignUp ' ,error);
        }

        setLoading(true);        
    }

    return (
        <>
            <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={activeStep}>
                {/* Change the number of loops here based on StepContent */}
                {[1, 2, 3].map(e =>
                    <Step key={e}>
                        <StepLabel StepIconComponent={StepperIcons} />
                    </Step>
                )}
            </Stepper>
            <Box className={classes.mainBox}>
                {activeStep === 3 ?
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        style={{ height: "400px" }}
                    >
                        {cardStatus
                            ?
                            <SentimentVerySatisfied fontSize="large" color="primary" />
                            :
                            <SentimentVeryDissatisfied fontSize="large" color="error" />
                        }
                        <Typography variant="h4">
                            {cardMessage}
                        </Typography>
                        <Button onClick={cardStatus ? handleReset : handleBack} className={classes.button}>
                            {cardStatus ? "Volver a empezar" : "Regresar"}
                        </Button>
                    </Grid>
                    :
                    <form autoComplete="off" className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                        <Grid container spacing={3}>
                            <StepContent 
                              step={activeStep} 
                              setFirstName = {setFirstName}
                              setLastName = {setLastName}
                              setEmail = {setEmail}
                              setEdad = {setEdad}
                              
                              setGenero = {setGenero}
                              setPsichologistSex = {setPsichologistSex}
                              setWhyTherapy = {setWhyTherapy}
                              setLastTherapy = {setLastTherapy}
                              setLastTherapyType = {setLastTherapyType}
                              setLastTherapyTypeScore = {setLastTherapyTypeScore}
                              setCurrentTreatment = {setCurrentTreatment}


                              />
                            <Grid container item justifyContent="flex-end">
                                <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                    Regresar
                                    </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ?
                                            <CircularProgress size={24} />
                                            :
                                            activeStep === 2 ? 'Agendar Asesoría' : 'Siguiente'
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </Box>
        </>
    );
}

export default StepperAsesoria;
