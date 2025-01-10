import mergeClasses from "@/utils/mergeClasses";
import { CaretLeft } from "@phosphor-icons/react";
import { cloneElement } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Wrap from "./Wrap";


interface CarrosselProps {
    children: JSX.Element[];
    slideAltomatico?: boolean;
}

export default function Carrossel({ children, slideAltomatico }: CarrosselProps) {
    const indiceAtual = 0;
    const NUMERO_DE_ITENS = children.length;

    return (
        <Wrap>
            <Container>
                <Wrap>
                    <div className="relative rounded-lg mb-5">
                        {children.map((filho: JSX.Element, i) => {
                            const propsFilho = filho.props;
                            return cloneElement(filho, {
                                className: `${i === indiceAtual ? "" : "hidder"}`,

                            })

                        })}
                    </div>
                    <Flex className="absolute bottom-5 left-1/2 z-30 translate-x-1/2 gap-2">
                        {Array.from({ length: NUMERO_DE_ITENS }).map((_, i) => {
                            return (
                                <button key={i} className={mergeClasses("h-3 w-3 rounded-full bg-gray-800", { "bg-gray-800": i === indiceAtual })}>

                                </button>
                            )
                        })}
                    </Flex>
                </Wrap>

            </Container>
            <button className={`group absolute left-0 top-0 h-full cursor-pointer flex items-center justify-center px-4 focus:outline-none`}>
                <span className={`inline-flex h-10 items-center justify-center rounded-full bg-gray-700/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white group-hover:bg-gray-800/60`}>
                    <CaretLeft size={20} />
                    <span className="hidden">
                        Anterior
                    </span>
                </span>
            </button>
        </Wrap>
    )
}