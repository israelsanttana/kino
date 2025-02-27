"use client"
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
    }, [id])
    return (
        <Wrap>
            {JSON.stringify(detalhesFilme)}
        </Wrap>
    )
}