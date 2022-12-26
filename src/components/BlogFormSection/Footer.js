import React from "react";
import {
    Typography,
    Grid,
    Link
} from "@material-ui/core";
import {
    Security,
    Info
} from "@material-ui/icons";
import NoticeDialog from "./LegalNoticePopups/NoticeDialog"; //TODO: delete or update this section ...

const Footer = () => {

    return <>
        <Grid  container justifyContent="center" style={{minHeight: "212px"} }>
            <Grid container item sm={6} xs={11} justifyContent="space-between">
                <Grid item sm={5} xs={12}>
                    <Security color="action" />
                    <Typography paragraph>
                    Tu seguridad es nuestra prioridad. Conoce nuestro <Link href="/privacy" target="_blank" alt="Stripe">Aviso de Privacidad</Link>.
                    </Typography>
                </Grid>
                <Grid item sm={5} xs={11}>
                    <Info color="action" />
                    <Typography paragraph>
                    Consulta nuestros <Link href="/terms-and-conditions" target="_blank">Términos y condiciones</Link>.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    </>
}

export default Footer;