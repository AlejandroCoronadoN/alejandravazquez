import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useContentState } from '../../../context';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210
    },
    smDropzone: {
        minHeight: 80,
      },
      
  }));
  

const ProfileForm4= ({
    setAcademicinformation,

}) => {
    const contentDetails = useContentState();
    const classes = useStyles();

    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>Perfil Amaru: formación académica .</Typography>
            </Grid>
        </Grid>


        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">En esta sección te invitamos a compartir tu experinecia profesional. Con esta información podremos perfilar a tus pacientes y hacer mejores recomendaciones a través de la asesoría gratuita Amaru.</Typography>
            </Grid>
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.ProfileFormContent.academic_information}
                name="academic_information"
                variant="outlined"
                multiline
                required
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setAcademicinformation(e.target.value)} 
            />
        </Grid>


        
    </>
}

export default ProfileForm4;
