import mergeClasses from "@/utils/mergeClasses";
import { Star } from "@phosphor-icons/react";
import Flex from "../template/Flex";

interface NotaProps {
    nota: number;
    grande?: boolean;
}

export function Nota({ nota, grande }: NotaProps) {
    return (
        <Flex className="mt-2">
            <Star weight="fill" className={mergeClasses("text-amber-400", { 'text-3xl': grande })} />
            <span className={mergeClasses("font-semibold", { "text-xl": grande })}>{nota.toFixed(1)}/10</span>
        </Flex>
    )
}