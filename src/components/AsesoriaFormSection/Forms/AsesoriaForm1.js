import React, {useState} from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useContentState } from '../../../context';



const sexo = [
  { name: 'Mujer ', code: 'F' },
  { name: 'Hombre', code: 'H' },
  {name: 'No Binario', code:'N'}
]



const AsesoriaForm1 = ({
  setFirstName,
  setLastName,
  setEmail,
  setEdad,
}) => {
    const contentDetails = useContentState();

    return <>
        <Grid item xs={12}>
            <Typography variant="h6" className='color-purple'>Información de contacto.</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.AsesoriaSectionContent.firstname}
                name="firstname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setFirstName(e.target.value)} 

            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.AsesoriaSectionContent.lastname}
                name="lastname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setLastName(e.target.value)} 


            />
        </Grid>
        <Grid item xs={12} sm={8}>
            <TextField
                label={contentDetails.AsesoriaSectionContent.email}
                name="email"
                variant="outlined"
                type="email"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)} 

            />
        </Grid>


        <Grid item xs={12} sm={4}>
            <TextField
                label={contentDetails.AsesoriaSectionContent.edad}
                name="email"
                variant="outlined"
                type=" number"
                required
                fullWidth
                onChange={(e) => setEdad(e.target.value)} 

            />
        </Grid>





    </>
}

export default AsesoriaForm1;





