"use client"
import { CardFilmeDetalhado } from "@/components/filmes/CardFilmeDetalhado";
import Wrap from "@/components/template/Wrap";
import { useMovieAPI } from "@/hooks/useMovieAPI";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filme() {
    const { id } = useParams()
    const [detalhesFilme, setDetalhesFilme] = useState<FilmeDetalhado | null>(null);
    const { getFilmeDetalhado } = useMovieAPI();
    useEffect(() => {
        getFilmeDetalhado(String(id)).then(setDetalhesFilme)
    }, [])
    return (
        <Wrap>
            {detalhesFilme && <CardFilmeDetalhado filme={detalhesFilme} />}
        </Wrap>
    )
}