import {ReactNode} from "react";

export type LinesInputProps = {
    id: string;
    LeftIcon?: ReactNode;
    setValue: (id: string, value: string) => void;
}