"use client"
import { Popcorn } from "@phosphor-icons/react";
import Link from "next/link";
import Flex from "./Flex";
import Wrap from "./Wrap";

export function Cabecalho() {
    return (
        <Wrap className="bg-neutral-950">
            <header className="p-4 md:px-12">
                <Flex className="justify-between">
                    <Link href="/" className={`font-bold px-4 py-2 bg-red-kino flex gap-1 items-center justify-center rounded-lg`}>
                        <Popcorn size={20} />
                        Kino
                    </Link>
                    <Link href="https://www.themoviedb.org/" target="_blank" className="font-bold px-4 hover:brightness-75">
                        The Movie DB
                    </Link>
                </Flex>
            </header>
        </Wrap>
    )
}