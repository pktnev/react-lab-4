import NormalElement from "./NormalElement.tsx";
import {
    SocialNetwork
} from "../social-network-options.tsx";
import {Selection} from "../../../models/Selection.ts";
import NetworkElement from "./NetworkElement.tsx";

type ElementListProps = {
    type: Selection;
    filteredOptions: string[] | SocialNetwork[];
}

const ElementList = (props: ElementListProps) => {
    const {filteredOptions, type} = props;

    if (filteredOptions.length === 0) return null;

    return (
        <>
            {filteredOptions.map((option, index: number) => (
                type === Selection.NORMAL ?
                    <NormalElement option={option} key={index}/>
                    : <NetworkElement option={option} key={index}/>
            ))}
        </>
    )

}

export default ElementList;