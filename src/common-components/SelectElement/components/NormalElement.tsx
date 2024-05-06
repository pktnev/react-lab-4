import {ReactNode} from "react";
import {Combobox} from "@headlessui/react";
import {LayoutProps} from "../../../models/LayoutProps.ts";

type ElementProps = {
    option: string;
}

type ElementLayoutProps = LayoutProps & {
    children: ReactNode;
    option: string;
}

const NormalElementLayout = (props: ElementLayoutProps) => {
    const {option, children} = props;

    return (
        <Combobox.Option
            className={({active, selected}) => `relative font-['Roboto'] font-light text-notification cursor-pointer select-none px-2 py-1
            ${active ? 'bg-gray text-white' : 'text-gray-900'}
            ${selected ? 'bg-gray text-white' : ''}
            `}
            value={option}
        >
            {children}
        </Combobox.Option>
    )
}

const NormalElement = (props: ElementProps) => {
    const {option} = props;

    return (
        <NormalElementLayout option={option}>
            <span>{option}</span>
        </NormalElementLayout>
    )
}

export default NormalElement;