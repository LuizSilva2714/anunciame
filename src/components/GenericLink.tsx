import { Link, Typography } from "@mui/material";

type GenericLinkProps = {
    reference: string,
    description?: string
}

function GenericLink(props: GenericLinkProps) {
    return (
        <Typography align="center">
            <Link href={props.reference} target="_blank" underline="none" fontSize={30} fontFamily={'Teko, sans-serif'} color={'black'} textAlign={'center'}>
                {props.description ?? 'Clique aqui!'}
            </Link> 
        </Typography>
    );
}

export default GenericLink;