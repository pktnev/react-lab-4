import {LayoutProps} from "../models/LayoutProps.ts";

const SeparatorLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full h-4 hidden responsive:flex items-center"}>
            {children}
        </div>
    )
}
const Separator = () => {
    return (
        <SeparatorLayout>
            <div className={"w-full border-b border-b-separator"}></div>
        </SeparatorLayout>
    )
}

export default Separator;