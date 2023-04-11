import { Link, Typography } from "@mui/material";

function InscriptionLink() {
    return (
        <Typography align="center">
            <Link href="#" underline="none" fontSize={50} fontFamily={'Teko, sans-serif'} color={'white'} textAlign={'center'}>
                Inscreva-se!
            </Link>
        </Typography>
    );
}

export default InscriptionLink;