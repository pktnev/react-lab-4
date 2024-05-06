import {getNetworkIcon} from "../helpers.ts";
import {Selection} from "../../../models/Selection.ts";
import {LayoutProps} from "../../../models/LayoutProps.ts";

type NetworkSelectedElementProps = {
    value: string;
    type: Selection;
}

const NetworkSelectedIconLayout = ({children}: LayoutProps) => {
    return (
        <div className="absolute responsive:text-notification text-eye left-0 h-full">
            <div className="flex items-center justify-center text-2xl h-full">
                {children}
            </div>
        </div>
    )
}

const NetworkSelectedIcon = (props: NetworkSelectedElementProps) => {
    const {value, type} = props;

    if (type === Selection.NORMAL || !value || value === '') return null;
    else return (
        <NetworkSelectedIconLayout>
            {getNetworkIcon(value)}
        </NetworkSelectedIconLayout>
    )
}

export default NetworkSelectedIcon;