"use client"
import { Botao } from "@/components/template/Botao";
import { Cabecalho } from "@/components/template/Cabecalho";
import { Carrossel } from "@/components/template/Carrossel";
import { Descricao } from "@/components/template/Descricao";
import { ImagemComFallback } from "@/components/template/imagemComFallback";
import { Titulo } from "@/components/template/Titulo";
import { Hourglass } from "@phosphor-icons/react";


export default function Home() {
  return (
    <>
      <Cabecalho />
      <Titulo texto="Titulo da página" pequeno alinhar="center"></Titulo>
      <Descricao className="text-center" texto="Descrição da página"></Descricao>
      <Carrossel slideAutomatico>
        <p>teste 1</p>
        <p>teste 2</p>
        <p>teste 3</p>
      </Carrossel>
      <Botao texto="Clique aqui"></Botao>
      <ImagemComFallback url="" imgAlt="Imagem de teste">
        <Hourglass size={150} />
      </ImagemComFallback>
    </>
  )
}
