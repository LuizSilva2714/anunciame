import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import InscriptionLink from './InscriptionLink';
import './HeaderContainer.css'


function HeaderContainer() {

    const [hasFadedIn, setHasFadedIn] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && !hasFadedIn) {
      setHasFadedIn(true);
    }
  }, [inView, hasFadedIn]);

  const fadeClass = hasFadedIn ? 'fade-in' : '';

    return (
        <Container className={"header-container fade-in-from-top " + fadeClass}>
            <Typography variant="h2" gutterBottom className="main-title" align="center" mt={4} fontFamily={'Teko, sans-serif'} fontWeight={'bold'}>
                ANUNCIA-ME VII
            </Typography>
            <Typography variant="h3" gutterBottom className="main-slogan" align="center" mt={1} fontFamily={'Qwigley, cursive'}>
                "Pois este meu filho estava morto e voltou à vida; estava perdido e foi achado"
            </Typography>
            <InscriptionLink />
        </Container>
    );
}

export default HeaderContainer;