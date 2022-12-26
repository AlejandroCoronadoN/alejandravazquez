import React , {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useContentState } from '../../../context';
import {
    TextField,
    Grid,
    Typography,
    Box,
    FormLabel, 
    FormControl, 
    FormGroup, 
    FormControlLabel, 
    FormHelperText, 
    Checkbox
    
} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlarmIcon from '@material-ui/icons/Alarm';

const lastTherapy = [  
  { name: 'Si ', code: 'Y' },
  { name: 'No', code: 'N' },
]

const lastTherapyType = [
  { name: 'Con enfoque de género', code: 'GEN' },
  { name: 'Cognitivo-conductual', code: 'CC' },
  { name: 'Psicoanálisis ', code: 'PS' },
  { name: 'Gestalt', code: 'GST' },
  { name: 'Coaching o ayuda alternativa', code: 'CO' },
  { name: 'No recuerdo el tipo', code: 'NR' },
  { name: 'Ninguno de estas opciones', code: 'NA' },
]

const lastTherapyTypeScore = [
  { name: 'Excelente', code: '7' },
  { name: 'Muy buena', code: '6' },
  { name: 'Buena', code: '5' },
  { name: 'Regular', code: '4' },
  { name: 'Mala', code: '3' },
  { name: 'Muy mala', code: '2' },
  { name: 'Terrible', code: '1' },
  { name: 'Nunca he asistido a terapia', code: 'NA' },
]

const currentTreatment = [
  { name: 'Estoy en tratamiento médico', code: 'TM' },
  { name: 'Estoy en tratamiento médico', code: 'TP' },
  { name: 'No estoy en tratamiento', code: 'TN' },
]

const ProfileForm2 = ({
    setSpecializationareas,
    setMainspecialization,
    setCedula,
    //setScore,
    //setLevel,

    setCertificationGarantee,
    setCertificationSocialimpact,
    setCertificationDirverse,
    setCertificationGender,
    setAcademicinformation,

    setQuote,
    setDescription,
    setQuestion1,
    setQuestion2,
    setQuestion3,
    setInstagram,
    setLinkedin

    }) => {    
        const [state, setState] = React.useState({
        depresion: true,
        ansiedad: false,
        soledad:false, 
        perpectivadegenero:false, 

        problemasfamiliares: true,
        adultosjovenes: false,
        violenciayabusosexual: false,
        adicciones: true,

        tanatologia: false,
        aislamientosocialcovid: false,
        problemasdesueno:false,
        otro:false

    });

  const contentDetails = useContentState();
  const handleEspecialidadOptions = (event, value) => {
    setMainspecialization(value);
  }

  const especialidadOptions= [
    { name: 'Psicoanális ', code: '1' },
    { name: 'Cognitivo conductual', code: '3' },
    { name: 'Terapia grupal', code: '4' },
    { name: 'Perspectiva de género', code: '5' },
    { name: 'Psicodrama', code: '6' },
    { name: 'Enfocada en soluciones', code: '7' },
  ];

    //const {
        //depresion,
        //ansiedad,
        //perpectivadegenero,
        //problemasfamiliares, 
        //adultosjovenes, 
        //tanatologia, 
        //aislamientosocialcovid, 
        //problemasdesueno, 
        //adicciones, 
        //soledad, 
        //violenciayabusosexual, 
        //otro, 
    //} = state;


    //TODO: Pasar todos las variables que reuqieren camnio, usar un swithc para aplicar el setVARIABLE de acuerdo al target_name
    //this variables are part of the imput
    const [depresion, setDepresion] = useState('');
    const [ansiedad, setAnsiedad] = useState('');
    const [perpectivadegenero, setPerpectivadegenero] = useState('');
    const [soledad, setSoledad] = useState('');
    const [problemasfamiliares, setProblemasfamiliares] = useState('');
    const [adultosjovenes, setAdultosjovenes] = useState('');
    const [violenciayabusosexual, setViolenciayabusosexual] = useState('');
    const [adicciones, setAdicciones] = useState('');
    const [tanatologia, setTanatologia] = useState('');
    const [aislamientosocialcovid, setAislamientosocialcovid] = useState('');
    const [problemasdesueno, setProblemasdesueno] = useState('');
    const [otro, setOtro] = useState('');

    const handleChange = (event) => {
        var target_name = event.target.nam;
        var status = event.target.checked;
        if (target_name == 'depresion'){
            setDepresion(status);
        }

    setState({
      ...state,
      
      [event.target.name]: event.target.checked,
      //
    });
  };
const error = [
    depresion,
    ansiedad,
    //soledad, 
    perpectivadegenero,

    //problemasfamiliares,
    //adultosjovenes,
    //violenciayabusosexual,
    //adicciones,
    //tanatologia,
    //aislamientosocialcovid,
    //problemasdesueno,
    //otro

].filter((v) => v).length !== 3;

    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>{contentDetails.ProfileFormContent.title2}</Typography>
            </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.ProfileFormContent.text2}</Typography>
            </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
            <Autocomplete
                options={especialidadOptions}
                getOptionLabel={option => option.name}
                onChange={handleEspecialidadOptions}
                renderInput={params =>
                    <TextField
                        label={contentDetails.ProfileFormContent.mainspecialization}
                        name="especialidad"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }
            />
        </Grid>

        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.ProfileFormContent.cedulaprofesional}
                name="firstname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setCedula(e.target.value)} 
            />
        </Grid>

        
        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.ProfileFormContent.question1}
                name="date"
                variant="outlined"
                multiline
                required
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setQuestion1(e.target.value)} 
            />
        </Grid>



        <Grid item xs={12}>
            <Typography variant="h6" className='color-purple'>{contentDetails.ProfileFormContent.title3}</Typography>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.ProfileFormContent.text3}</Typography>
            </Grid>
        </Grid>

    <Box sx={{ display: 'auto', margin:'auto' }}>
    <FormControl // Ansiedad, depresion ...
            required
            error={error}
            component="fieldset"
            sx={{ m: 2 }}
            variant="standard"
        >
            <FormGroup>
            <FormControlLabel
                control={
                <Checkbox 
                    icon={<FavoriteIcon  />}  
                    checkedIcon={<FavoriteIcon  />}  
                    checked={depresion} 
                    onChange={handleChange} 
                    name="depresion" />
                }
                label="Depresión."
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={ansiedad} onChange={handleChange} name="ansiedad" />
                }
                label="Ansiedad."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={soledad} onChange={soledad} name="soledad" />
                }
                label="Soledad."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={perpectivadegenero} onChange={handleChange} name="perpectivadegenero" />
                }
                label="Perspectiva de Género"
            />
            </FormGroup>
    </FormControl > 

    <FormControl  // problemasfamiliares, niñosyadolecentes ...
            required
            error={error}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
        >
            <FormGroup>
            <FormControlLabel
                control={
                <Checkbox 
                    icon={<FavoriteIcon  />}  
                    checkedIcon={<FavoriteIcon  />}  
                    checked={problemasfamiliares} 
                    onChange={handleChange} 
                    name="problemasfamiliares" />
                }
                label="Problemas familiares."
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={adultosjovenes} onChange={handleChange} name="adultosjovenes" />
                }
                label="Atención a adultos jóvenes."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={violenciayabusosexual} onChange={handleChange} name="violenciayabusosexual" />
                }
                label="Violencia y abuso sexual."
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={adicciones} onChange={handleChange} name="adicciones" />
                }
                label="Addiciones."
            />
            </FormGroup>
    </FormControl>

    
    <FormControl // tanatologia, vejez
            required
            error={error}
            component="fieldset"
            sx={{ m: 2 }}
            variant="standard"
        >
            <FormGroup>

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={tanatologia} onChange={handleChange} name="tanatologia" />
                }
                label="Tanatología."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={aislamientosocialcovid} onChange={handleChange} name="aislamientosocialcovid" />
                }
                label="Aislamiento social y COVID-19."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={problemasdesueno} onChange={handleChange} name="problemasdesueno" />
                }
                label="Problemas de sueño"
            />

<FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={otro} onChange={handleChange} name="otro" />
                }
                label="Otro."
            />

                    <FormLabel component="legend">Seleccióna 3 opciónes </FormLabel>

            </FormGroup>
    </FormControl>


    </Box>


    </>
}


export default ProfileForm2;

