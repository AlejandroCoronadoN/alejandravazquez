import React, {useState} from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useContentState } from '../../../context';


const PhotoForm2 = ({
  setAuthorName,
  setAuthorLastname,
  setAuthorEmail,
  setCoauthorName,
  setCoauthorLastname
}) => {
    const contentDetails = useContentState();
    return <>
        <Grid item xs={12}>
            <Typography variant="h6" className='color-purple'>{contentDetails.PhotoFormContent.title1}</Typography>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.PhotoFormContent.text1}</Typography>
            </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.PhotoFormContent.author}
                name="authorname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setAuthorName(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.PhotoFormContent.apellidoauthor}
                name="authorlastname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setAuthorLastname(e.target.value)} 
            />
        </Grid>

        <Grid item xs={12} sm={12}>
            <TextField
                label={contentDetails.PhotoFormContent.emailauthor}
                name="authoremail"
                variant="outlined"
                type="email"
                required
                fullWidth
                onChange={(e) => setAuthorEmail(e.target.value)} 

            />
        </Grid>


        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.PhotoFormContent.coauthor}
                name="coauthorname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setCoauthorName(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.PhotoFormContent.apellidocoauthor}
                name="coauthorlastname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setCoauthorLastname(e.target.value)} 


            />
        </Grid>

    </>
}

export default PhotoForm2;





