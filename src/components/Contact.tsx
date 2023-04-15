import { Grid, Typography } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InscriptionLink from "./InscriptionLink";



function Contact() {
    return (
        <>
        <Typography variant="h3" mt={3} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="right" mb={5} maxWidth={'90%'}>
                Se ainda tiver dúvidas, entre em contato:
            </Typography>
        <Grid container spacing={2} style={{
            paddingBottom: 50
        }}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} textAlign={'center'}>
                <WhatsAppIcon style={{
                    fontSize: 24
                }}/>
                <a href="https://wa.me/5511967189744" target="_blank" style={{
                    fontFamily: 'Teko, sans-serif',
                    textDecoration: 'none',
                    fontSize: 24,
                    color: 'black'
                }}>WhatsApp</a>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} textAlign={'center'}>
                <EmailIcon style={{
                    fontSize: 24
                }}/>
                <a href="mailto:comunicacao@jupac.net" target="_blank" style={{
                    fontFamily: 'Teko, sans-serif',
                    textDecoration: 'none',
                    fontSize: 24,
                    color: 'black'
                }}>E-mail</a>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} textAlign={'center'}>
                <LocalPhoneIcon style={{
                    fontSize: 24
                }}/>
                <a target="_blank" style={{
                    fontFamily: 'Teko, sans-serif',
                    textDecoration: 'none',
                    fontSize: 24,
                    color: 'black'
                }} href="https://wa.me/5511967189744">Telefone: (11) 96718-9744 (Luiz) /</a> <a target="_blank" href="https://wa.me/5511968190130" style={{fontFamily: 'Teko, sans-serif', textDecoration: 'none', fontSize: 24, color: 'black'}}> (11) 96819-0130 (Alex)</a>
            </Grid>
        </Grid>
        <Typography variant="h3" mt={3} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="center" mb={5}>
                Deus abençoe e VEM COM A GENTE! 
            </Typography>
            <InscriptionLink />
        </>
    );
}

export default Contact;