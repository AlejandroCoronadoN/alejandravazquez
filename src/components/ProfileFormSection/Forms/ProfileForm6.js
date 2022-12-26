import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useContentState } from '../../../context';
import Autocomplete from '@material-ui/lab/Autocomplete';

const sexo = [
  { name: 'Mujer ', code: 'F' },
  { name: 'Hombre', code: 'H' },
]


const ProfileForm6 = ({
  setQuestion1,
  setQuestion2
}) => {
    const contentDetails = useContentState();

    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>Perfil Amaru: Interacción con la paciente</Typography>
            </Grid>
        </Grid>


        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">Estas preguntas aparecerán como parte de tu perfil y permiten hacer la primera interacción con tus futuras pacientes. Te recoemndamos escribir un mensaje positivo y alentador.</Typography>
            </Grid>
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

        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.ProfileFormContent.question2}
                name="date"
                variant="outlined"
                multiline
                required
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setQuestion2(e.target.value)} 
            />
        </Grid>

        
    </>
}

export default ProfileForm6;
