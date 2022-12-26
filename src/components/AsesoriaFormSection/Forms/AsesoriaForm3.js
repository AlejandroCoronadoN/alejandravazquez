import React //, {useState }
    from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
//import {
//    CardCvcElement,
//    CardNumberElement,
//    CardExpiryElement
//} from "@stripe/react-stripe-js";
import { useContentState } from '../../../context';


const lastTherapy = [
  { name: 'Si ', code: 'Y' },
  { name: 'No', code: 'N' },
]

const lastTherapyType = [
  { name: 'Con enfoque de género', code: 'GEN' },
  { name: 'Cognitivo-conductual', code: 'CC' },
  { name: 'Psicoanálisis ', code: 'PS' },
  { name: 'Gestalt', code: 'GST' },
  { name: 'Coaching o ayuda alternativa', code: 'CO' },
  { name: 'No recuerdo el tipo', code: 'NR' },
  { name: 'Ninguno de estas opciones', code: 'NA' },


]

const lastTherapyTypeScore = [
  { name: 'Excelente', code: '7' },
  { name: 'Muy buena', code: '6' },
  { name: 'Buena', code: '5' },
  { name: 'Regular', code: '4' },
  { name: 'Mala', code: '3' },
  { name: 'Muy mala', code: '2' },
  { name: 'Terrible', code: '1' },
  { name: 'Nunca he asistido a terapia', code: 'NA' },

]

const currentTreatment = [
  { name: 'Estoy en tratamiento médico', code: 'TM' },
  { name: 'Estoy en tratamiento médico', code: 'TP' },
  { name: 'No estoy en tratamiento', code: 'TN' },

]

const AsesoriaForm3 = ({
  setLastTherapy,
  setLastTherapyType,
  setLastTherapyTypeScore,
  setCurrentTreatment
}) => {
    const contentDetails = useContentState();
    //const [{ formValues }, dispatch] = useStateValue();

    const handlesetLastTherapy = (event, value) => {
      setLastTherapy(value);
    }
    const handlesetLastTherapyType = (event, value) => {
      setLastTherapyType(value);
    }
    const handlesetLastTherapyTypeScore = (event, value) => {
      setLastTherapyTypeScore(value);
    }
    const handlesetCurrentTreatment = (event, value) => {
      setCurrentTreatment(value);
    }
    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={3}>
                <Typography variant="h6">Encuadre psicológico</Typography>
            </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
            <Autocomplete
                options={lastTherapy}
                getOptionLabel={option => option.name}
                onChange={handlesetLastTherapy}
                renderInput={params =>
                    <TextField
                        label={contentDetails.AsesoriaSectionContent.lastTherapy}
                        name="lastTherapy"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>


        <Grid item xs={12} sm={6}>
            <Autocomplete
                options={lastTherapyType}
                getOptionLabel={option => option.name}
                onChange={handlesetLastTherapyType}
                renderInput={params =>
                    <TextField
                        label={contentDetails.AsesoriaSectionContent.lastTherapyType}
                        name="LastTherapyType"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <Autocomplete
                options={lastTherapyTypeScore}
                getOptionLabel={option => option.name}
                onChange={handlesetLastTherapyTypeScore}
                renderInput={params =>
                    <TextField
                        label={contentDetails.AsesoriaSectionContent.lastTherapyTypeScore}
                        name="lastTherapyTypeScore"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>


        <Grid item xs={12} sm={12}>
            <Autocomplete
                options={currentTreatment}
                getOptionLabel={option => option.name}
                onChange={handlesetCurrentTreatment}
                renderInput={params =>
                    <TextField
                        label={contentDetails.AsesoriaSectionContent.currentTreatment}
                        name="currentTreatment"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>
    </>
}


/* 


        <Grid item xs={12} sm={6}>
            <TextField
                label="Credit Card Number"
                name="ccnumber"
                variant="outlined"
                required
                fullWidth
                InputProps={{
                    inputComponent: StripeInput,
                    inputProps: {
                        component: CardNumberElement
                    },
                }}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setName(e.target.value)} 

            />
        </Grid>
        <Grid item xs={6} sm={6}>
            <TextField
                label="Expiration Date"
                name="ccexp"
                variant="outlined"
                required
                fullWidth
                InputProps={{
                    inputProps: {
                        component: CardExpiryElement
                    },
                    inputComponent: StripeInput
                }}
                InputLabelProps={{ shrink: true }}
                
            />
        </Grid>
        <Grid item xs={6} sm={6}>
            <TextField
                label="CVC"
                name="cvc"
                variant="outlined"
                required
                fullWidth
                InputProps={{
                    inputProps: {
                        component: CardCvcElement
                    },
                    inputComponent: StripeInput
                }}
                InputLabelProps={{ shrink: true }}
            />
        </Grid>

        */
export default AsesoriaForm3;
