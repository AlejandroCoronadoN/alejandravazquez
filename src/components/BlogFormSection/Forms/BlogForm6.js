import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useContentState } from '../../../context';

const PhotoForm6 = ({
  setSubtitle3,
  setContent3
}) => {
    const contentDetails = useContentState();

 
    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid item xs={12}>
            <Typography variant="h6">{contentDetails.PhotoFormContent.title6}</Typography>
        </Grid>



        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.subtitle6}
                name="date"
                variant="outlined"
                multiline
                rows ={1}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setSubtitle3(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.section3}
                name="date"
                variant="outlined"
                multiline
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setContent3(e.target.value)} 

            />
        </Grid>
        
    </>
}

export default PhotoForm6;
