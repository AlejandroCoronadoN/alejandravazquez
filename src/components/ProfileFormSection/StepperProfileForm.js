import React, { useState } from 'react';
import { uploadForm} from '../../context';
import { makeStyles } from '@material-ui/core/styles';
import { submitForm, useAuthDispatch } from '../../context';
import {
    Stepper,
    Grid,
    Step,
    StepLabel,
    Button,
    Typography,
    Box,
    CircularProgress,
} from '@material-ui/core';
import {
    SentimentVerySatisfied,
    SentimentVeryDissatisfied
} from '@material-ui/icons';
import StepperIcons from "./StepperIcons";
import ProfileForm1 from "./Forms/ProfileForm1";
import ProfileForm2 from "./Forms/ProfileForm2";
import ProfileForm3 from "./Forms/ProfileForm3";
import ProfileForm4 from "./Forms/ProfileForm4";
import ProfileForm5 from "./Forms/ProfileForm5";
import ProfileForm6 from "./Forms/ProfileForm6";
import ProfileForm7 from "./Forms/ProfileForm7";
import ProfileForm8 from "./Forms/ProfileForm8";
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
            return <ProfileForm1 // Intruduction message before filling tthe form
            />;

        case 1: //TODO: Changes casese after edditing
            return <ProfileForm2 // Informacion de contacto
                setName = {props.setName}
                setApellidoPaterno = {props.setApellidoPaterno}
                setApellidoMaterno = {props.setApellidoMaterno}
                setEmail = {props.setEmail}
                setPhone = {props.setPhone}
                setWhatsapp = {props.setWhatsapp}
            />;

        case 2:
            return <ProfileForm3  //School: Experiencia profesional 
                setMainspecialization = {props.setMainspecialization}
                setMaster= {props.setMaster}
                setSpecializationareas = {props.setSpecializationareas}
                specialization_areas= {props.specialization_areas}
                setCedula = {props.setCedula}

            />;
        case 3:
            return <ProfileForm4 //Science: Academic CV + Profile files
                 //setScore,
                //setLevel,
                setAcademicinformation= {props.setAcademicinformation}
                setProfilepicture = {props.setProfilepicture}
                setCurriculum = {props.setCurriculum}

            />;

        case 4:
            return <ProfileForm5//Bio1
                 //setScore,
                //setLevel,
                setBio= {props.setBio}
                setLinkedin = {props.setLinkedin}
                setQuote = {props.setQuote}
            />;

        case 5:
            return <ProfileForm6  // Preguntas
                setQuestion1 = {props.setQuestion1}
                setQuestion2 = {props.setQuestion2}
            />;
        case 6:
            return <ProfileForm7 // Programas Amaru
                setCertificationGarantee = {props.setCertificationGarantee}
                setCertificationSocialimpact = {props.setCertificationSocialimpact}
                setCertificationDirverse = {props.setCertificationDirverse}
                setCertificationGender = {props.setCertificationGender}
            />;

        case 7:
            return <ProfileForm8 // end of survey (text)
            />;
        default:
            return <></>;
    }
}

const StepperProfileForm = props => {
    const contentDetails = useContentState();
    const classes = style();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [cardStatus, setCardStatus] = useState(true);
    const [cardMessage, setCardMessage] = useState("");

    //FORM STATES
    const [name, setName] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [master, setMaster] = useState();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState(false);
    const [cedula, setCedula] = useState(false);
    const [specialization_areas, setSpecializationareas] = useState(['test']);
    const [mainspecialization, setMainspecialization] = useState('');
    const [profilepicture, setProfilepicture] = useState('');
    const [curriculum, setCurriculum] = useState('');

    const [quote, setQuote] = useState('');
    const [score, setScore] = useState('');
    const [level, setLevel] = useState('');
    const [profilePath,setProfilepath]   = useState("ERROR: NO MODIFIED");
    const [certificationGuarantee, setCertificationGarantee] = useState(false);
    const [certificationSocialimpact, setCertificationSocialimpact] = useState(false);
    const [certificationDiverse, setCertificationDirverse] = useState(false);
    const [certificationGender, setCertificationGender] = useState(false);
    const [certificationVerified, setCertificationVerified] = useState(false);
    const [academic_information, setAcademicinformation] = useState('');
    const [bio, setBio] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const dispatch = useAuthDispatch();
    const handleNext = () => {
        //Last modifications to form before upload some  are blocks to avoid showing unreviewed profiles
        setLevel(1);
        setProfilepath(name + "-" + apellidoPaterno + "-" + apellidoMaterno );
        setScore(5);
        setProfilepicture('https://firebasestorage.googleapis.com/v0/b/amaruapp-d9102.appspot.com/o/logo%20amaru%20square.png?alt=media&token=31401a1b-19d4-4cf8-b6f0-d3f895111abf');
        setCertificationVerified(false)

        if (activeStep === 7) {
            capture();
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const capture = async () => {
        const date = new Date();
        const formData = {
        collectionName: 'psychologists',  //This Variable needs to be chnaged for each component and Firebase Collection
        name: name,
        master: master,
        email: email,
        phone: phone,
        cedula: cedula,
        whatsapp: whatsapp,
        apellidoPaterno:apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        specialization_areas: specialization_areas,
        mainspecialization: mainspecialization,
        quote: quote,
        score: score,
        level: level,
        certificationGuarantee: certificationGuarantee,
        certificationSocialimpact: certificationSocialimpact,
        certificationDiverse: certificationDiverse,
        certificationGender: certificationGender,
        certificationVerified:certificationVerified,
        academic_information: academic_information,

        bio: bio,
        profilepicture:profilepicture,
        curriculum:curriculum,

        question1: question1,
        question2: question2,

        instagram: instagram,
        linkedin: linkedin,
        
        profilePath: profilePath, 
        date: date,

        refresh_token: " ", 
    
        }
        console.log(' Stepper/capture ->formData:', formData);
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
                        <StepLabel StepIconComponent={StepperIcons} />
                    </Step>
                )}
            </Stepper>
            <Box className={classes.mainBox}>
                    <form autoComplete="off" className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                        <Grid container spacing={3}>
                            <StepContent 
                              step={activeStep} 

                              setName = {setName}
                              setApellidoPaterno = {setApellidoPaterno}
                              setApellidoMaterno = {setApellidoMaterno}
                              setEmail = {setEmail}
                              setPhone = {setPhone}
                              setWhatsapp = {setWhatsapp}

                              setMainspecialization = {setMainspecialization}
                              setMaster = {setMaster}
                              setCedula  = {setCedula}
                              specialization_areas = {specialization_areas}

                              setAcademicinformation = {setAcademicinformation}
                              setProfilepicture = {setProfilepicture}
                              setCurriculum = {setCurriculum}

                              setQuote = {setQuote}
                              setBio = {setBio}


                              setSpecializationareas = {setSpecializationareas}
                              setScore = {setScore}
                              setLevel = {setLevel}
                              setCertificationGarantee = {setCertificationGarantee}
                              setCertificationSocialimpact = {setCertificationSocialimpact}
                              setCertificationDirverse = {setCertificationDirverse}
                              setCertificationGender = {setCertificationGender}
                              setQuestion1 = {setQuestion1}
                              setQuestion2 = {setQuestion2}

                              setInstagram = {setInstagram}
                              setLinkedin = {setLinkedin}

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
                                            activeStep === 6? 'Terminar formulario' : 'Siguiente'
                                    }
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
            </Box>
        </>
    );
}

export default StepperProfileForm;
