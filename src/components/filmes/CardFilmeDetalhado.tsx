import Container from "../template/Container";
import { Descricao } from "../template/Descricao";
import Flex from "../template/Flex";
import { Titulo } from "../template/Titulo";
import { Generos } from "./Generos";
import { Nota } from "./Nota";
import { PosterDoFilme } from "./PosterDoFilme";

interface CardFilmeDetalhadoProps {
    filme: FilmeDetalhado;

}


export function CardFilmeDetalhado({ filme }: CardFilmeDetalhadoProps) {
    return (
        <Container>
            <Flex col className={`bg-neutral-950 rounded-lg mt-8 p-4 md:p-8 lg:flex-row`}>
                <PosterDoFilme url={filme.linkImagemPoster} titulo={filme.titulo} />
                <Flex col className="m-3 ml-8 gap-8 text-xl items-start">
                    <Titulo texto={filme.titulo} alinhar="center" className="lg:text-start" />
                    <Descricao texto={filme.descricao} className="text-base" />
                    <p>
                        Lançamento: {" "} {new Intl.DateTimeFormat("pt-BR").format(new Date(`${filme.dataDeLancamento}`))}
                    </p>
                    <p>
                        Duração: {filme.duracao} minutos
                    </p>
                    <p>
                        Títuloo original: {filme.tituloOriginal}
                    </p>
                    <Flex col className="justify-start items-start w-full">
                        <Generos idFilmes={filme.id} generosPadrao={filme.generos} grande />
                        <Nota nota={filme.nota} grande />
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}