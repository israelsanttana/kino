import mergeClasses from "@/utils/mergeClasses";

interface BotaoProps {
    texto: string;
    incone?: React.JSX.Element;
    className?: string;
}

export function Botao({ texto, incone, className }: BotaoProps) {
    return (
        <button className={mergeClasses(`
            bg-red-kino
            flex gap-1 items-center justify-center px-3 py-2 font-semibold rounded-lg
            hover:brightness-75 hover:transition-all
            `)}>
            {incone}
            <span>{texto}</span>
        </button>
    )

}