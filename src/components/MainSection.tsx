import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import './MainSection.css';
import OpenGoogleMaps from "./OpenGoogleMaps";
import GenericLink from "./GenericLink";

function MainSection() {
    return(
        <>
        <Typography variant="h3" mt={5} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="left" maxWidth={'90%'} pl={2}>
                Informações principais
            </Typography>
        <Grid container spacing={5} ml={1} mr={1} mt={3} maxWidth={'90%'}>
            <Grid item xl={3} lg={4} md={6} sm={12}>
                <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                    Data
                </Typography>
                <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                Dias 21, 22 e 23 de Julho
                </Typography>
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
            <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                    Endereço
                </Typography>
                <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                Estr. da Quarta Divisão, 823 - Estância São Luís - Suzano - SP (CEP: 08640-425)
                <OpenGoogleMaps reference="https://goo.gl/maps/qUJg3Chn4CfbH6r2A" />
                <GenericLink reference="https://drive.google.com/drive/folders/1D7CTK7GRMm3BMp8gJm55PhOdWzeVuNvh" description="Clique aqui para ver fotos" />
                </Typography>
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
            <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                    Saída e Retorno
                </Typography>
                <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                SAÍDA: dia 21 de Julho, às 19h, da Rua Roberto Correia, 338 - Jardim Sydney - São Paulo - SP (CEP: 02982-170)
                <OpenGoogleMaps reference="https://goo.gl/maps/En9WTYLTA2RnScXAA" />
                </Typography>
                <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                RETORNO: dia 23 de Julho, às 19h (previsão de chegada)
                </Typography>
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
            <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                    Valor
                </Typography>
                <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                O valor da inscrição é R$ 60, mas caso você tenha qualquer problema ou dificuldade, pode entrar em contato conosco!
                </Typography>
                <Typography variant="h6" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                Chave PIX: comunicacao@jupac.net
                <GenericLink reference="https://nubank.com.br/cobranca/srUURsJLH08ednu" description="Clique aqui para pagar via Pix" />
                <Typography variant="h5" mt={3} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="center" mb={5}>
                    <strong>Ei! Se o seu pensamento for "puts, não tenho dinheiro agora", não se preocupe! Você pode pagar até dia 09/07 ;-)</strong>
                </Typography>
                </Typography>
            </Grid>
        </Grid>
        </>
    );
}

export default MainSection;