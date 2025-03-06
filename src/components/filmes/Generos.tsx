import { useMovieAPI } from "@/hooks/useMovieAPI";
import mergeClasses from "@/utils/mergeClasses";
import { useEffect, useState } from "react";
import Flex from "../template/Flex";

interface GenerosProps {
    idFilmes: string;
    grande?: boolean;
    generosPadrao?: Genero[];
}

export function Generos({ idFilmes, grande, generosPadrao }: GenerosProps) {
    const [generos, setGeneros] = useState<Genero[]>([]);
    const { getGeneroDoFilme } = useMovieAPI()

    useEffect(() => {
        if (generosPadrao && generosPadrao.length > 0) {
            setGeneros(generosPadrao)
            return;
        }
        getGeneroDoFilme(idFilmes).then(setGeneros)
    }, [])

    return (
        <Flex className="flex-wrap justify-between">
            {generos.map((genero) => {
                return <span key={genero.id} className={mergeClasses(`bg-red-kino font-semibold backdrop-blur-md p-1 rounded-lg text-xs`, { 'text-lg': grande })}>{genero.nome}</span>
            })}
        </Flex>
    )
}