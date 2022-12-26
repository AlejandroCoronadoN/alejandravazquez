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


const AsesoriaForm2 = ({
  setPsichologistSex,
  setWhyTherapy
}) => {
    const contentDetails = useContentState();

    const handleAutocomplete = (event, value) => {
      setPsichologistSex(value);
    }
    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid item xs={12}>
            <Typography className='purple-color' variant="h6">Datos adicionales</Typography>
        </Grid>



        <Grid item xs={12} sm={12}>
            <Autocomplete
                options={sexo}
                getOptionLabel={option => option.name}
                onChange={handleAutocomplete}
                renderInput={params =>
                    <TextField
                        label={contentDetails.AsesoriaSectionContent.psichologistSex}
                        name="sexo"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.AsesoriaSectionContent.whyTherapy}
                name="date"
                variant="outlined"
                multiline
                required
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setWhyTherapy(e.target.value)} 

            />
        </Grid>
        
    </>
}

export default AsesoriaForm2;
