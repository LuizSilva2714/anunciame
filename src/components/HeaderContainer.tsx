import { useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import './HeaderContainer.css'

function HeaderContainer() {
    return (
        <Container maxWidth={false}>
            <Typography variant="h1" gutterBottom className="main-title" align="center" mt={4} fontFamily={'Rye, cursive'}>
                ANUNCIA-ME VII
            </Typography>
            <Typography variant="h3" gutterBottom className="main-slogan" align="center" mt={1} fontFamily={'Qwigley, cursive'}>
                "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna" (João 3:16)
            </Typography>
        </Container>
    );
}

export default HeaderContainer;