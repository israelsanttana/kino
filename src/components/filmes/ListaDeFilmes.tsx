import Container from "../template/Container";
import Grid from "../template/Grid";
import { Titulo } from "../template/Titulo";
import { CardFilme } from "./CardFilme";

interface ListaDeFilmesProps {
    filmes: Filme[];
    className?: string;
    titulo: string;
    tituloPequeno?: boolean;
}

export function ListaDeFilmes({ filmes, className, titulo, tituloPequeno }: ListaDeFilmesProps) {

    return (
        <Container className={className}>
            <Titulo className="pl-2" alinhar="center" texto={titulo} pequeno={tituloPequeno} />
            <Grid className="md:grid-cols-2 lg:grid-cols-3 py-5">
                {filmes.map((filme) => {
                    return (
                        <CardFilme filme={filme} />
                    )
                })}
            </Grid>
        </Container>
    )
}