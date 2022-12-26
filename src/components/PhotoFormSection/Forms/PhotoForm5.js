import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useContentState } from '../../../context';

const PhotoForm4 = ({
  setSubtitle2,
  setContent2
}) => {
    const contentDetails = useContentState();

    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid item xs={12}>
            <Typography variant="h6">{contentDetails.PhotoFormContent.title5}</Typography>
        </Grid>



        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.subtitle2}
                name="date"
                variant="outlined"
                multiline
                rows ={1}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setSubtitle2(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.section2}
                name="date"
                variant="outlined"
                multiline
                rows ={7}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setContent2(e.target.value)} 

            />
        </Grid>
        
    </>
}

export default PhotoForm4;
