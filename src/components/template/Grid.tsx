import mergeClasses from "@/utils/mergeClasses";

interface GridProps {
    children: React.ReactNode;
    className?: string;
    column?: boolean;
    numCols?: number;
    numRows?: number;
}

export default function Grid({ children, className, numCols, numRows, column }: GridProps) {
    return (
        <div className={mergeClasses(
            `grid grid-rows-${numRows}`,
            { [`grid-cols-${numCols}`]: column },
        )} >{children}
        </div>
    )
}