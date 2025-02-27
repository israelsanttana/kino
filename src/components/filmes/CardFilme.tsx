import mergeClasses from "@/utils/mergeClasses";
import { FilmSlate } from "@phosphor-icons/react";
import Flex from "../template/Flex";
import { ImagemComFallback } from "../template/imagemComFallback";
import { Titulo } from "../template/Titulo";
import Wrap from "../template/Wrap";
import { Generos } from "./Generos";
import { Nota } from "./Nota";

interface CardFilmeProps {
    filme: Filme;
    className?: string;
}

export function CardFilme({ filme, className }: CardFilmeProps) {
    return (
        <Wrap className={mergeClasses(`rounded-2xl h-60 max-h-60 bg-black border border-white/[0.2] group-hover:border-red-kino relative z-20`, className)}>
            <ImagemComFallback url={filme.linkImagemFundo} imgAlt={`Imagem de fundo do filme ${filme.titulo} `}
                className="opacity-40 group-hover:opacity-20 transition-all">
                <FilmSlate className="w-1/2 h-2/3 transition-all" />
            </ImagemComFallback>
            <Flex className="h-60 z-50 flex-col py-10 px-2">
                <Titulo texto={filme.titulo} alinhar="left" className="m-auto" />
                <Flex col className="justify-start items-start w-full">
                    <Generos idFilmes={filme.id} />
                    <Nota nota={filme.nota} />
                </Flex>

            </Flex>
        </Wrap>
    )
}
