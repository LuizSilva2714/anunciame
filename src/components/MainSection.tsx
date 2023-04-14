import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import './MainSection.css';

function MainSection() {
    return(
        <>
        <Typography variant="h3" mt={5} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="left">
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
                Estr. da Quarta Divisão, 823 - Estância São Luís Suzano - SP (CEP: 08640-425)
                </Typography>
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
            <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                    Saída e Retorno
                </Typography>
                <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                SAÍDA: dia 21 de Julho, às 19h, da Rua Roberto Correia, 338 - Jardim Sydney - SP (CEP: 02982-170)
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
                </Typography>
            </Grid>
        </Grid>
        </>
    );
}

export default MainSection;