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


const ProfileForm5 = ({
    setQuote,
    setBio,
    setLinkedin,
}) => {
    const contentDetails = useContentState();

    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>Perfil Amaru:  Escribe tu Bio</Typography>
            </Grid>
        </Grid>


        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">Esta información aparecerá como parte de tu perfil y permiten hacer la primera interacción con tus futuras pacientes. Te recoemndamos escribir un mensaje positivo y alentador.</Typography>
            </Grid>
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.ProfileFormContent.biography}
                name="biography"
                variant="outlined"
                multiline
                required
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setBio(e.target.value)} 
            />
        </Grid>




        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.ProfileFormContent.quote}
                name="biography"
                variant="outlined"
                multiline
                required
                rows ={2}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setQuote(e.target.value)} 
            />
        </Grid>
    
        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.ProfileFormContent.linkedin}
                name="biography"
                variant="outlined"
                multiline
                required
                rows ={1}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setLinkedin(e.target.value)} 
            />
        </Grid>

    </>
}

export default ProfileForm5;
