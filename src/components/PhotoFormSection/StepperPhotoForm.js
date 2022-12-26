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
import StepperPhotosIcons from "./StepperPhotosIcons";
import PhotoForm1 from "./Forms/PhotoForm1";
import PhotoForm2 from "./Forms/PhotoForm2";
import PhotoForm3 from "./Forms/PhotoForm3";
import PhotoForm4 from "./Forms/PhotoForm4";
import PhotoForm5 from "./Forms/PhotoForm5";
import PhotoForm6 from "./Forms/PhotoForm6";
import PhotoForm7 from "./Forms/PhotoForm7";

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
            return <PhotoForm1 
            />;
        case 1:
            return <PhotoForm2 
                setAuthorName = {props.setAuthorName}
                setAuthorLastname = {props.setAuthorLastname}
                setAuthorEmail = {props.setAuthorEmail}
                setCoauthorName = {props.setCoauthorName}
                setCoauthorLastname = {props.setCoauthorLastname}
            />;
        case 2:
            return <PhotoForm3 
                categories = {props.categories}
                setCategories ={props.setCategories}
                setTitle = {props.setTitle}
                setAbstract ={props.setAbstract}
            />;
        case 3:
            return <PhotoForm4 
                setSubtitle1 = {props.setSubtitle1}
                setContent1 = {props.setContent1}
            //setSection1img = {props.setSection1img} #TODO: Include upload component
            />;
        case 4:
                return <PhotoForm5
                    setSubtitle2 = {props.setSubtitle2}
                    setContent2 = {props.setContent2}
                //setSection1img = {props.setSection1img} #TODO: Include upload component
         />;
         case 5:
            return <PhotoForm6 
                setSubtitle3 = {props.setSubtitle3}
                setContent3 = {props.setContent3}
            //setSection1img = {props.setSection1img} #TODO: Include upload component
        />;
        case 6:
            return <PhotoForm7
            />;

        default:
            return <></>;
    }
}

const StepperPhotoForm = props => {
    const [cardStatus, setCardStatus] = useState(true);
    const [cardMessage, setCardMessage] = useState("");
    const [photoPath,setPhotoPath]   = useState("ERROR: NO MODIFIED");

    const classes = style();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);

    //FORM STATES
    const [authorName, setAuthorName]= useState();
    const [authorLastname, setAuthorLastname] = useState();
    const [authorEmail, setAuthorEmail] = useState();
    const [coauthorName, setCoauthorName] = useState();
    const [coauthorLastname, setCoauthorLastname] = useState();

    const [title, setTitle] = useState();
    const [abstract, setAbstract] = useState();
    const [categories, setCategories] = useState();

    const [subtitle1, setSubtitle1] = useState();
    const [content1, setContent1] = useState();
    const [subtitle2, setSubtitle2] = useState();
    const [content2, setContent2] = useState();
    const [subtitle3, setSubtitle3] = useState();
    const [content3, setContent3] = useState();

    const dispatch = useAuthDispatch();


    const handleNext = () => {
        setPhotoPath(title);

        if (activeStep === 6) {
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
        collectionName: 'Photos',  //This Variable needs to be chnaged for each component and Firebase Collection
        loading: loading,

        authorName: authorName,
        authorLastname: authorLastname,
        authorEmail: authorEmail,
        coauthorName: coauthorName,
        coauthorLastname: coauthorLastname,

        categories: categories,
        title: title,
        abstract:abstract,

        subtitle1:subtitle1,
        content1:content1,
        subtitle2:subtitle2,
        content2:content2,
        subtitle3:subtitle3,
        content3:content3,
        imgcover: "https://firebasestorage.googleapis.com/v0/b/amaruapp-d9102.appspot.com/o/blogtest.jpg?alt=media&token=7df2ec91-9bfe-4b7d-a4b4-27d1b496662f",
        img1: false, //TODO: replace this objects using dropzone componet
        img2: false,
        img3:false,
        photoPath: photoPath,
        date: date,
    }
        console.log(' StepperPhotoForm/capture ->formData:', formData);
        try {
          let response = await uploadForm(dispatch, {formData});

          //window.location.href ='https://calendly.com/amaru-asesoria';

        } catch (error) {
          console.log('Error: Signup-> handleSignUp ' ,error);
        }

        setLoading(true);        
    }

    return (
        <>
            <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={activeStep}>
                {/* Change the number of loops here based on StepContent */}
                {[1, 2, 3,4,5,6, 7].map(e =>
                    <Step key={e}>
                        <StepLabel StepIconComponent={StepperPhotosIcons} />
                    </Step>
                )}
            </Stepper>
            <Box className={classes.mainBox}>
                {activeStep === 7 ?
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

                              setAuthorName = {setAuthorName}
                              setAuthorLastname = {setAuthorLastname}
                              setAuthorEmail = {setAuthorEmail}
                              setCoauthorName = {setCoauthorName}
                              setCoauthorLastname = {setCoauthorLastname}

                              setCategories = {setCategories}
                              setTitle = {setTitle}           
                              setAbstract = {setAbstract}
                              categories ={categories}

                              setSubtitle1 = {setSubtitle1}
                              setContent1 = {setContent1}
                              setSubtitle2 = {setSubtitle2}
                              setContent2 = {setContent2}
                              setSubtitle3 = {setSubtitle3}
                              setContent3 = {setContent3}
     
                              
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
                                            activeStep === 7 ? 'Agendar Asesoría' : 'Siguiente'
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

export default StepperPhotoForm;
