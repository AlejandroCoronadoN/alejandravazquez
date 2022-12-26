import React, {useState} from 'react';
import {
    TextField,
    Grid,
    Typography,
    
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useContentState } from '../../../context';
//import MuiPhoneNumber from "material-ui-phone-number"; //TODO: Implement
//import { DropzoneArea } from "material-ui-dropzone";

const whatsappOptions = [
    { name: 'Si ', code: 'Y' },
    { name: 'No', code: 'N' },
  ];

const ProfileForm2 = ({
    setName,
    setApellidoPaterno,
    setApellidoMaterno,
    setEmail,
    setPhone,
    setWhatsapp,
    }) => {
        
    const handleWhatsapp = (event, value) => {
        setWhatsapp(value);
      }

    const contentDetails = useContentState();
    return <>
        <Grid item xs={12}>
            <Typography variant="h6" className='color-purple'>{contentDetails.ProfileFormContent.title1}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label={contentDetails.ProfileFormContent.name}
                name="firstname"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setName(e.target.value)} 
            />
        </Grid>

        <Grid item xs={12} sm={4}>
            <TextField
                label={contentDetails.ProfileFormContent.apellidoPaterno}
                name="lastname_2"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setApellidoPaterno(e.target.value)} 
            />
        </Grid>

        <Grid item xs={12} sm={4}>
            <TextField
                label={contentDetails.ProfileFormContent.apellidoMaterno}
                name="apellidoMaterno"
                variant="outlined"
                required
                fullWidth
                onChange={(e) => setApellidoMaterno(e.target.value)} 
            />
        </Grid>



        <Grid item xs={12} sm={6}>
            <TextField
                label={contentDetails.ProfileFormContent.phone}
                name="phone"
                variant="outlined"
                type="phone"
                required
                fullWidth
                onChange={(e) => setPhone(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={6}>
            <Autocomplete
                options={whatsappOptions}
                getOptionLabel={option => option.name}
                onChange={handleWhatsapp}
                renderInput={params =>
                    <TextField
                        label={contentDetails.ProfileFormContent.whatsapp}
                        name="whatsapp"
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
                label={contentDetails.ProfileFormContent.email}
                name="email"
                variant="outlined"
                type="email"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)} 
            />
        </Grid>

        </>
}

export default ProfileForm2;





