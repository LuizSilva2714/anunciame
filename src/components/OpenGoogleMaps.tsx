import { Link, Typography } from "@mui/material";
import { Icon } from '@mui/material';
import { Map } from "@mui/icons-material";

type OpenGoogleMapsProps = {
    reference: string
}

function OpenGoogleMaps(props: OpenGoogleMapsProps) {
    return (
        <Typography align="center">
            <Link href={props.reference} target="_blank" underline="none" fontSize={30} fontFamily={'Teko, sans-serif'} color={'black'} textAlign={'center'}>
                Abrir no Google Maps 
            </Link> 
            <Map />
        </Typography>
    );
}

export default OpenGoogleMaps;