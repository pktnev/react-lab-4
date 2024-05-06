import {Dispatch, SetStateAction} from "react";
import {Combobox} from "@headlessui/react";
import CaretDown from "../../CaretDown.tsx";
import {useFormContext} from "react-hook-form";
import NetworkSelectedIcon from "./NetworkSelectedIcon.tsx";
import {Selection} from "../../../models/Selection.ts";
import {LayoutProps} from "../../../models/LayoutProps.ts";

type TopLineProps = {
    setQuery: Dispatch<SetStateAction<string>>;
    id: string;
    type: Selection;
    selected: string;
    width?: string;
}

const TopLineLayout = ({children} : LayoutProps) => {
    return (
        <div className="relative h-11 w-full font-['Roboto'] gap-4 text-lg justify-between flex items-center cursor-pointer select-none">
            {children}
        </div>
    )
}
const TopLine = (props: TopLineProps) => {
    const {setQuery, id, type, selected, width} = props;
    const {register} = useFormContext();

    return (
        <TopLineLayout>
            <NetworkSelectedIcon type={type} value={selected}/>
            <Combobox.Input
                {...register(id, {required: true})}
                autoComplete={"off"}
                className={`${type === Selection.NETWORK ? 'pl-10' : 'pl-4'} 
                ${width ? width : 'w-full'}
                font-['Roboto'] h-full border-b py-2  pr-7 border-phone-number focus:border-primary bg-transparent text-notification text-lg focus:outline-none font-normal`}
                onChange={(event) => {
                    setQuery(event.target.value);
                }}
            />
            <Combobox.Button className="absolute right-1 text-base size-6 flex items-center justify-center">
                <CaretDown/>
            </Combobox.Button>
        </TopLineLayout>
    )
}

export default TopLine;