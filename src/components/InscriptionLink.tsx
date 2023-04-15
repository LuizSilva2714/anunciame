import { Link, Typography } from "@mui/material";

function InscriptionLink() {
    return (
        <Typography align="center">
            <Link href="https://forms.gle/o5izNL1hikEgpNSG6" underline="none" fontSize={50} fontFamily={'Teko, sans-serif'} color={'black'} textAlign={'center'}>
                Clique aqui e inscreva-se!
            </Link>
        </Typography>
    );
}

export default InscriptionLink;