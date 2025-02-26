"use client"
import mergeClasses from "@/utils/mergeClasses";
import Image from "next/image";
import { useEffect, useState } from "react";
import Flex from "./Flex";


interface ImagemComFallbackProps {
    url: string;
    imgAlt: string;
    className?: string;
    children?: React.ReactNode;
}

export function ImagemComFallback({ url, imgAlt, className, children }: ImagemComFallbackProps) {
    const [imagemPadrao, setImagemPadrao] = useState(false);

    useEffect(() => {
        fetch(url).then(resposta => setImagemPadrao(!resposta.ok))
    }, [])

    if (imagemPadrao || !url) {
        return <Flex col className="h-full w-full absolute -z-30">{children}</Flex>
    }
    return <Image fill alt={imgAlt} src={url} className={mergeClasses("object-cover", className)} sizes="80vw" />

}