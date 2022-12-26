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


const PhotoForm3 = ({
  setSubtitle1,
  setContent1
}) => {
    const contentDetails = useContentState();


    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid item xs={12}>
            <Typography variant="h6">{contentDetails.PhotoFormContent.title4}</Typography>
        </Grid>



        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.subtitle1}
                name="date"
                variant="outlined"
                multiline
                required
                rows ={1}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setSubtitle1(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.section1}
                name="date"
                variant="outlined"
                multiline
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setContent1(e.target.value)} 

            />
        </Grid>
        
    </>
}

export default PhotoForm3;
