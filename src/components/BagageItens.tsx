import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from '@mui/material';


function BagageItens() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <>
            <Typography variant="h3" mt={3} fontFamily={'Teko, sans-serif'} fontWeight={'medium'} align="left" maxWidth={'90%'} pl={2}>
                O que levar:
            </Typography>
            <Grid container spacing={1} ml={1} mr={1} mt={3} maxWidth={'90%'}>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Roupas
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Roupas que possam ser sujas
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Roupas íntimas
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Toalhas
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Itens de higiene pessoal
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Cobertor
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Travesseiro
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Documentos
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Bíblia
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Terço
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Roupa de banho
                    </Typography>

                </Grid>
                <Grid item xl={2} lg={2} md={3} sm={3}>
                    <Typography variant="h4" gutterBottom align="center" mt={1} fontFamily={'Teko, sans-serif'} fontWeight={'light'}>
                        - Um coração aberto!
                    </Typography>

                </Grid>
                
            </Grid>


        </>
    );
}

export default BagageItens;