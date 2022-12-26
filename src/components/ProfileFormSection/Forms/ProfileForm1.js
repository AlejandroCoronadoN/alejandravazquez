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

const ProfileForm1 = ({
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

    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>Formulario de perfilamiento de psicólogxs </Typography>
            </Grid>
        </Grid>


        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">En Amaru estamos en la continua búsqueda de aliadas y aliados que se integren a nuestro equipo de psicologxs. Pensamos en Amaru como una comunidad que busca crear un ambiente de trabajo seguro con personas interesadas en el impacto social y en brindar atención psicólogica oportuna, confiable y profesional.  </Typography>
            </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">Ayudandos a contestar el siguiente formulario empezando por tu información de contacto. Posteriormente te pediremos que nos brinder algunso datos sobre tu formación académica y experiencia y por último información que agregaremos a tu perfil de psicóloga Amaru.  </Typography>
            </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">Si te falta algun dato no te preocupes :D podrás completar los datos faltantes el dia de tu sesión con nuestra asesora de Amaru.</Typography>
            </Grid>
        </Grid>

    </>
}


export default ProfileForm1;

