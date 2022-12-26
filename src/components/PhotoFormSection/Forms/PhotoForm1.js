import React //, {useState }
    from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useContentState } from '../../../context';

//import {
//    CardCvcElement,
//    CardNumberElement,
//    CardExpiryElement
//} from "@stripe/react-stripe-js";

const PhotoForm1 = ({}) => {
    //const [{ formValues }, dispatch] = useStateValue();

    const contentDetails = useContentState();

    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'> {contentDetails.PhotoFormContent.titlestart} </Typography>
            </Grid>
        </Grid>


        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10"> {contentDetails.PhotoFormContent.textstart1}</Typography>
            </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.PhotoFormContent.textstart2}</Typography>
            </Grid>
        </Grid>

        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">{contentDetails.PhotoFormContent.textstart3}</Typography>
            </Grid>
        </Grid>

    </>
}


export default PhotoForm1;

