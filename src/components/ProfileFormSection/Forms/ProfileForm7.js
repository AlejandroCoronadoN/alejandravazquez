import React from 'react';
import {
    TextField,
    Grid,
    Typography,
    Box
} from "@material-ui/core";
import { useContentState } from '../../../context';
import Autocomplete from '@material-ui/lab/Autocomplete';

const sexo = [
  { name: 'Mujer ', code: false },
  { name: 'Hombre', code: true },
]

const agrementOption = [
    { name: 'Si ', code: true },
    { name: 'No', code: false },
  ];



const ProfileForm7= ({
    setCertificationGarantee,
    setCertificationSocialimpact,
    setCertificationDirverse,
    setCertificationGender
}) => {

    const handleCertification1 = (event, value) => {
        setCertificationGarantee(value);
      }
      const handleCertification2 = (event, value) => {
        setCertificationSocialimpact(value);
      }
      const handleCertification3 = (event, value) => {
        setCertificationDirverse(value);
      }
      const handleCertification4 = (event, value) => {
        setCertificationGender(value);
      }


    const contentDetails = useContentState();

    //const [{ formValues }, dispatch] = useStateValue();
    return <>
        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" className='color-purple'>Perfil Amaru: Intereacción con pacientes</Typography>
            </Grid>
        </Grid>


        <Grid container item xs={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h10">Invitamos a todas a nuestras piscologas y psicólogos a participar en nuestros programas de impacto social. No podemos llegar a las personas mas vulnerables sin el apoyo de nuestra counidad y nuestras y nuestros psicologos. Algunos de estos programas son opcionales e ingresar a ellos representa mayores venatajas en nuestra plataforma como mayor visbilidad o un bonito certificado en tu perfil Amaru :D</Typography>
            </Grid>
        </Grid>


        <Grid item xs={10} sm={10}>
            <Autocomplete
                options={agrementOption}
                getOptionLabel={option => option.name}
                onChange={handleCertification1}
                renderInput={params =>
                    <TextField
                        label={contentDetails.ProfileFormContent.certificationGuarantee}
                        name="garantia"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>

        <Grid item xs={2} sm={2}>
            <Box
            component="img"
            sx={{
                height: 75,
                width: 75,
                margin: -10,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="Amaru garantia psicologa ideal"
            src="https://firebasestorage.googleapis.com/v0/b/amaruapp-d9102.appspot.com/o/amaru-certificacion-garantia.png?alt=media&token=6a784be0-f60e-4bd9-aa8a-4d9be66a2da6"
        />
    </Grid>
        


        <Grid item xs={10} sm={10}>
            <Autocomplete
                options={agrementOption}
                getOptionLabel={option => option.name}
                onChange={handleCertification2}
                renderInput={params =>
                    <TextField
                        label={contentDetails.ProfileFormContent.certificationSocialimpact}
                        name="socialimpact"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>

        <Grid item xs={2} sm={2}>
            <Box
            component="img"
            sx={{
                height: 75,
                width: 75,
                margin: -10,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="Amaru Impacto Social "
            src="https://firebasestorage.googleapis.com/v0/b/amaruapp-d9102.appspot.com/o/amaru-certificacion-programasocial.png?alt=media&token=b27a32a6-3f64-4f32-9657-12910af91084"
        />
    </Grid>

        <Grid item xs={10} sm={10}>
            <Autocomplete
                options={agrementOption}
                getOptionLabel={option => option.name}
                onChange={handleCertification3}
                renderInput={params =>
                    <TextField
                        label={contentDetails.ProfileFormContent.certificationGroup}
                        name="terapiagrupo"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>

        <Grid item xs={2} sm={2}>
            <Box
            component="img"
            sx={{
                height: 75,
                width: 75,
                margin: -10,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="Amaru terapia grupal"
            src="https://firebasestorage.googleapis.com/v0/b/amaruapp-d9102.appspot.com/o/amaru-certificacion-terapiagrupal.png?alt=media&token=81e9eaca-0dcf-4df4-8fb5-679e9641c1e2"
        />
    </Grid>



        <Grid item xs={10} sm={10}>
            <Autocomplete
                options={agrementOption}
                getOptionLabel={option => option.name}
                onChange={handleCertification4}
                renderInput={params =>
                    <TextField
                        label={contentDetails.ProfileFormContent.certificationGender}
                        name="certificationGender"
                        variant="outlined"
                        required
                        fullWidth
                        {...params}
                    />
                }

            />
        </Grid>

        <Grid item xs={2} sm={2}>
            <Box
            component="img"
            sx={{
                height: 75,
                width: 75,
                margin: -10,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            alt="Amaru perspectiva genero terapia."
            src="https://firebasestorage.googleapis.com/v0/b/amaruapp-d9102.appspot.com/o/amaru-certificacion-genero.png?alt=media&token=4bace25e-b4c6-4f07-8a43-f187c798ee56"
        />
    </Grid>

    </>
}

export default ProfileForm7;
