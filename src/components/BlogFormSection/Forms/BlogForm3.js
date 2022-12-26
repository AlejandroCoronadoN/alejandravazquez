import React , {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useContentState } from '../../../context';
import {
    TextField,
    Grid,
    Typography,
    Box,
    FormLabel, 
    FormControl, 
    FormGroup, 
    FormControlLabel, 
    FormHelperText, 
    Checkbox
    
} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlarmIcon from '@material-ui/icons/Alarm';




const ProfileForm3= ({
    setTitle,
    setCategories,
    categories,
    setAbstract

    }) => {    
        const [specializationareaslist, setCategorieslist] =React.useState([])
        const [optionState, setOptionsstate] = React.useState({

        depresion: false,
        ansiedad: false,
        soledad:false, 
        perpectivadegenero:false, 
        problemasfamiliares: false,
        adultosjovenes: false,
        violenciayabusosexual: false,
        adicciones: false,
        tanatologia: false,
        aislamientosocialcovid: false,
        problemasdesueno:false,
        otro:false

    });

  const contentDetails = useContentState();


    const handleChange = (event) => {
        var target_name = event.target.name;
        var status = event.target.checked;
        console.log(' >>>> target_name: '+ target_name +' status:  ' + status + ' optionState: '  + optionState);
        setOptionsstate({
            ...optionState,
            [event.target.name]: event.target.checked,
        });

        Object.keys(optionState).map((item, idx)  => {
            if(optionState[item]){
                console.log('optionState element: ' +  item + '  -> value ' + optionState[item]);
                if (specializationareaslist.includes(item)){
                    console.log('WARNING: item already in list')
                }else{
                    //Not in list 
                    console.log('Inserting item in list: ' + item);
                    specializationareaslist.push(item)
                    setCategories(specializationareaslist)
                }
                }
            });
        setCategories(specializationareaslist);
        console.log(' DEBUG: ProfileFORM categories: ' + categories );


  };

    const error = [
        optionState.depresion, 
        optionState.ansiedad, 
        optionState.soledad, 
        optionState.perpectivadegenero, 
        optionState.problemasfamiliares, 
        optionState.adultosjovenes, 
        optionState.violenciayabusosexual, 
        optionState.adicciones, 
        optionState.tanatologia, 
        optionState.aislamientosocialcovid, 
        optionState.problemasdesueno, 
        optionState.otro, 

    ].filter((v) => v).length !== 3;

    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>{contentDetails.PhotoFormContent.titlebf3}</Typography>
            </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.PhotoFormContent.text3_1}</Typography>
            </Grid>
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.articleTitle}
                name="articletitle"
                variant="outlined"
                multiline
                required
                rows ={1}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setTitle(e.target.value)} 
            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <TextField
                type="date"
                label={contentDetails.PhotoFormContent.abstract}
                name="abstract"
                variant="outlined"
                multiline
                required
                rows ={1}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                onChange={(e) => setAbstract(e.target.value)} 
            />
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.PhotoFormContent.text3_2}</Typography>
            </Grid>
        </Grid>

    <Box sx={{ display: 'auto', margin:'auto' }}>
    <FormControl // Ansiedad, depresion ...
            required
            error={error}
            component="fieldset"
            sx={{ m: 2 }}
            variant="standard"
        >
            <FormGroup>
            <FormControlLabel
                control={
                <Checkbox 
                    icon={<FavoriteIcon  />}  
                    checkedIcon={<FavoriteIcon  />}  
                    checked={optionState.depresion} 
                    onChange={handleChange} 
                    name="depresion" />
                }
                label="Depresión."
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.optionStateansiedad} onChange={handleChange} name="ansiedad" />
                }
                label="Ansiedad."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.soledad} onChange={handleChange} name="soledad" />
                }
                label="Soledad."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.perpectivadegenero} onChange={handleChange} name="perpectivadegenero" />
                }
                label="Perspectiva de Género"
            />
            </FormGroup>
    </FormControl > 

    <FormControl  // problemasfamiliares, niñosyadolecentes ...
            required
            error={error}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
        >
            <FormGroup>
            <FormControlLabel
                control={
                <Checkbox 
                    icon={<FavoriteIcon  />}  
                    checkedIcon={<FavoriteIcon  />}  
                    checked={optionState.problemasfamiliares} 
                    onChange={handleChange} 
                    name="problemasfamiliares" />
                }
                label="Problemas familiares."
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.adultosjovenes} onChange={handleChange} name="adultosjovenes" />
                }
                label="Atención a adultos jóvenes."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.violenciayabusosexual} onChange={handleChange} name="violenciayabusosexual" />
                }
                label="Violencia y abuso sexual."
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.adicciones} onChange={handleChange} name="adicciones" />
                }
                label="Addiciones."
            />
            </FormGroup>
    </FormControl>

    
    <FormControl // tanatologia, vejez
            required
            error={error}
            component="fieldset"
            sx={{ m: 2 }}
            variant="standard"
        >
            <FormGroup>

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.tanatologia} onChange={handleChange} name="tanatologia" />
                }
                label="Tanatología."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.aislamientosocialcovid} onChange={handleChange} name="aislamientosocialcovid" />
                }
                label="Aislamiento social y COVID-19."
            />
            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.problemasdesueno} onChange={handleChange} name="problemasdesueno" />
                }
                label="Problemas de sueño"
            />

            <FormControlLabel
                control={
                <Checkbox 
                icon={<FavoriteIcon  />}  
                checkedIcon={<FavoriteIcon  />}  
                checked={optionState.otro} onChange={handleChange} name="otro" />
                }
                label="Otro."
            />

                    <FormLabel component="legend">Seleccióna SÓLO 3 opciónes </FormLabel>

            </FormGroup>
    </FormControl>


    </Box>


    </>
}


export default ProfileForm3;

