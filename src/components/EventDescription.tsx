import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import './EventDescription.css';
import { Container } from "@mui/material";

function EventDescription() {
    return (
        <>

            <Typography variant="h3" mt={3} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="right" maxWidth={'90%'}>
                O que você vai viver no retiro:
            </Typography>
            <Grid container spacing={1} ml={1} mr={1} mt={3} maxWidth={'90%'}>
                <Grid item xl={3} lg={4} md={6} sm={12}>
                    <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                        Pregações
                    </Typography>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        Você viverá momentos de espiritualidade com diversos temas, como "Amor de Deus", "Pecado e Salvação", "Espírito Santo" e mais, com pregações e uma vivência prática!
                    </Typography>
                </Grid>
                <Grid item xl={3} lg={4} md={6} sm={12}>
                    <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                        Louvor
                    </Typography>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        Como nenhum jovem gosta de ficar parado e sentado por muito tempo, também vamos dançar, louvar e nos divertir muito!
                    </Typography>
                </Grid>
                <Grid item xl={3} lg={4} md={6} sm={12}>
                    <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                        Lazer e diversão
                    </Typography>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        Além de tudo isso, também vamos tirar um bom tempo no domingo para ter aquele lazer merecido, com direito a piscina, futebol, jogos, brincadeiras, gincanas e muito mais!
                    </Typography>
                </Grid>
                <Grid item xl={3} lg={4} md={6} sm={12}>
                    <Typography variant="h3" fontFamily={'Alkatra, cursive'} align="center">
                        Um encontro com Cristo
                    </Typography>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        No fim, tudo isso é oferecido para que você possa viver nesse retiro um encontro verdadeiro com Jesus!
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default EventDescription;